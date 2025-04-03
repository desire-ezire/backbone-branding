import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/work" className="text-white hover:underline">
            Work
          </Link>
          <Link to="/services" className="text-white hover:underline">
            Services
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
