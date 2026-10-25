import { Link, useLocation } from "react-router-dom";
import { Mountain, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Risk Map", path: "/map" },
    { name: "Prediction", path: "/prediction" },
    { name: "Alerts", path: "/alerts" },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-[#173D2A] text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <div className="rounded-lg bg-[#D77A5D] p-2">
            <Mountain size={23} />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide">
              LANDSLIDE WATCH
            </h1>

            <p className="hidden text-xs text-gray-300 sm:block">
              Uttarakhand Early Warning System
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-[#D77A5D]"
                    : "text-white hover:text-[#D77A5D]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#163626] px-6 py-4 md:hidden">

          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium ${
                location.pathname === link.path
                  ? "text-[#D77A5D]"
                  : "text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

        </div>
      )}
    </nav>
  );
}

export default Navbar;