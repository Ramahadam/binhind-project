// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const navItems = [
  { href: '/about-us', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact-us', label: 'Contact Us' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary border-b border-gray-200 px-2 py-1 text-white ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="">
          <Image src="./logo.svg" alt="" width={120} height={120} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 ">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paragraph hover:text-primary transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <span
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-paragraph h-8 w-8 text-white"
          aria-label="Toggle Menu"
        >
          {/* Hamburger icon */}

          {menuOpen ? <XMarkIcon /> : <Bars3Icon />}
        </span>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="md:hidden mt-2 flex flex-col space-y-2 px-4 relative bg-primary py-4  w-full h-dvh">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-paragraph hover:text-primary transition py-1"
              onClick={() => setMenuOpen(false)} // Close on click
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
