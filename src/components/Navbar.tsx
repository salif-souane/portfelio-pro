import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="absolute w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex space-x-6">
          <Link
            to="/"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
