import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-48 bg-amber-200 h-screen p-4">
      <nav className="flex flex-col space-y-3">
        <Link to="/" className="hover:bg-amber-100 text-orange-600 p-2 rounded">Home</Link>
        {/* ตั้งชื่อ */}
        <Link to="/Recipes" className="hover:bg-amber-100 text-orange-600 p-2 rounded">Basic Recipes</Link>
        <Link to="/tt" className="hover:bg-amber-100 text-orange-600 p-2 rounded">Tips & Tricks</Link>
        <Link to="/igd" className="hover:bg-amber-100 text-orange-600 p-2 rounded">Ingredients</Link>
      </nav>
    </div>
  );
}