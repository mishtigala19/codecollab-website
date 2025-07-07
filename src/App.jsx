import { Outlet,Link } from "@tanstack/react-router";

function App() {
  return (
    <div className="min-h-screen flex-col items-center justify-center bg-gray-100 text-3xl font-bold text-blue-600">
      {/* CodeCollab Website Setup Complete 🚀 */}
      <div> <Outlet /> </div>
    </div>
  );
}

export default App;
