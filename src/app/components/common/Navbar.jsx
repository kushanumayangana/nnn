import React, { useState } from "react";

const Navbar = ({ handleLoginPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <>
      <main className="shadow-lg bg-[#ff5722] backdrop-blur-sm">
        <div className="container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center justify-center text-3xl font-bold text-white"
            >
              UniFeast
            </a>

            {/* Menu for larger screens */}
            <div className="hidden sm:block">
              <ul className="flex items-center justify-center gap-4 text-lg font-semibold">
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-white select-none hover:text-gray-900"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-white select-none hover:text-gray-900"
                  >
                    Favorite
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-white select-none hover:text-gray-900"
                  >
                    Message
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-4 text-white select-none hover:text-gray-900"
                  >
                    Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="inline-block px-4 py-4 text-white select-none hover:text-gray-900"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="block sm:hidden">
              <button
                onClick={toggleMenu}
                className="px-4 py-4 text-3xl font-semibold text-white"
              >
                ☰ {/* Hamburger Icon */}
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute left-0 w-full bg-white shadow-lg sm:hidden top-16 ">
              <ul className="flex flex-col items-start justify-center gap-2 p-4 text-lg font-semibold rounded-md">
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-black select-none hover:text-gray-700"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-black select-none hover:text-gray-700"
                  >
                    Favorite
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-black select-none hover:text-gray-700"
                  >
                    Message
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block px-4 py-2 text-black select-none hover:text-gray-700"
                  >
                    Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={handleLoginPopup}
                    className="inline-block px-4 py-2 text-black select-none hover:text-gray-700"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Navbar;
