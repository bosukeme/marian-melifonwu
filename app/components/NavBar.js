"use client";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";


const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 md:px-16">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold"
        >
          <Link href="/">Marian Melifonwu</Link>
        </motion.h1>

        <nav className="hidden md:flex space-x-8 text-sm">
          {navLinks.map((link, i) => (
            <motion.div
              className="hover:text-amber-400"
              key={link.name}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link href={link.href}>{link.name}</Link>
            </motion.div>
          ))}
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.nav
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          className="flex flex-col items-center space-y-4 pb-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-amber-400"
            >
              {link.name}
            </Link>
          ))}
        </motion.nav>
      )}
    </div>
  );
};

export default NavBar;
