import axios from "axios";
export const fetchReposForUser = async (username, repoNames = []) => {
  const repoFragments = repoNames.map(
    name => `
      ${name.replace(/[-.]/g, "_")}: repository(name: "${name}") {
        name
        description
        url
        updatedAt
        primaryLanguage { name }
        owner { avatarUrl }
      }
    `
  ).join('\n');

  const query = `
    query {
      user(login: "${username}") {
        ${repoFragments}
      }
    }
  `;

  const res = await axios.post(
    "https://api.github.com/graphql",
    { query },
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    }
  );

  const userRepos = res.data.data.user;
  const repos = Object.values(userRepos).map(repo => ({
    name: repo.name,
    description: repo.description,
    url: repo.url,
    updatedAt: repo.updatedAt,
    language: repo.primaryLanguage?.name || "N/A",
    avatar: repo.owner.avatarUrl,
  }));

  return repos;
};
