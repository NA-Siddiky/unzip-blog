// components/Navbar.tsx
import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="text-xl font-bold cursor-pointer">Unzip Blog</div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Home</div>
          </Link>
          <Link href="/tech">
            <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Tech</div>
          </Link>
          <Link href="/blog">
            <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Blog</div>
          </Link>
          <Link href="/users">
            <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Users</div>
          </Link>
          <Link href="/jobs">
            <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Jobs</div>
          </Link>
        </div>
        <div className="flex items-center">
          <input type="text" placeholder="Search..." className="border-2 border-gray-800 px-2 py-1 rounded focus:outline-none" />
          <button className="bg-green-500 text-white px-3 py-1 rounded ml-2">Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
