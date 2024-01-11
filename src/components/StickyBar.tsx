import React from 'react';
import Link from 'next/link';

const StickyBar = () => {
    return (

        <div className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 flex flex-col items-center justify-between shadow-md">
            <div className="flex flex-col items-center space-y-4">
                <Link href="/">
                    <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Home</div>
                </Link>
                <Link href="/tech">
                    <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Tech</div>
                </Link>
                <Link href="/blog">
                    <div className="hover:bg-gray-800 px-3 py-2 rounded cursor-pointer">Blog</div>
                </Link>
            </div>
            {/* "X" logo */}

        </div>

    );
};

export default StickyBar;