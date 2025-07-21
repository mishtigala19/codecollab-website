import React, { Suspense, useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface READMEViewerProps {
  owner: string;
  repo: string;
  className?: string;
}

const READMEViewer: React.FC<READMEViewerProps> = ({ owner, repo, className = '' }) => {
  const [readmeContent, setReadmeContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchREADME = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/readme`,
          {
            headers: {
              'Accept': 'application/vnd.github.raw',
              'User-Agent': 'CodeCollab-Website'
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch README: ${response.status} ${response.statusText}`);
        }

        const content = await response.text();
        setReadmeContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load README');
      } finally {
        setLoading(false);
      }
    };

    fetchREADME();
  }, [owner, repo]);

  if (loading) {
    return (
      <div className={className}>
        <div>Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`text-red-600 bg-red-50 border border-red-200 rounded-lg p-4 ${className}`}>
        <p className="font-medium">Error loading README:</p>
        <p className="text-sm">{error}</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={`prose prose-neutral max-w-none ${className}`}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {readmeContent}
        </ReactMarkdown>
      </div>
    </Suspense>
  );
};

export default READMEViewer; 