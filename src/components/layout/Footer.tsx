import React from 'react';

const Footer = () => {
    return (
        <div className="py-10">
            <span className="flex justify-between bg-black text-white py-3 px-4 rounded-2xl">
                <span className="text-xs gap-1">
                    <span>© 2025 All rights reserved</span>
                </span>
                <div className="flex gap-2 text-xs">
                    <span>Privacy</span>
                    <span>Terms</span>
                </div>
            </span>
        </div>
    );
};

export default Footer;
