"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { FiActivity } from "react-icons/fi";
import { useApp } from "@/context/AppContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
const { isLoggedIn, setIsLoggedIn } = useApp(); // Assuming useApp provides user and logout

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoggedIn]);

  const logout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
    setIsMenuOpen(false);
  }

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", auth: true },
    { name: "Profile", href: "/profile", auth: true },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-sm"
          : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-mauve-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg">
              <FiActivity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              FitTracker
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map(
              (item) =>
                isLoggedIn && (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium">
                    {item.name}
                  </Link>
                )
            )}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="hidden md:flex items-center gap-3">
              {!isLoggedIn ? (
                <Link href="/auth">
                  <button className="text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium">
                    Sign in
                  </button>
                </Link>
              ) : (
                <button
                  onClick={logout}
                  className="text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium">
                  Logout
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <IoMdClose className="w-6 h-6" />
              ) : (
                <IoMdMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
            <div className="px-4 py-6 space-y-4">
              {menuItems.map(
                (item) =>
                  isLoggedIn && (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}>
                      {item.name}
                    </Link>
                  )
              )}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 space-y-3">
                {!isLoggedIn ? (
                  <Link href="/auth">
                    <button className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium py-2">
                      Sign in
                    </button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      logout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left text-gray-600 dark:text-gray-300 hover:text-mauve-500 transition-colors font-medium py-2">
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
