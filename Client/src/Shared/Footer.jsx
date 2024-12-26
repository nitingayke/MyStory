import React from "react";
import { Facebook, Instagram, GitHub, YouTube } from "@mui/icons-material";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-400 py-6">
            <div className="mx-auto px-4 text-center">

                <div className="flex  flex-wrap justify-center space-x-6 mb-4">
                    {["About", "Blog", "Jobs", "Press", "Accessibility", "Partners"].map(
                        (item, index) => (
                            <a
                                key={index}
                                href={`#${item.toLowerCase()}`}
                                className="hover:text-white transition pb-2"
                            >
                                {item}
                            </a>
                        )
                    )}
                </div>

                <div className="flex flex-wrap justify-center items-center space-x-2 mb-4">
                    <a
                        href="#facebook"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Facebook />
                    </a>
                    <a
                        href="#instagram"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Instagram />
                    </a>
                    <a href="#twitter" className="text-gray-400 hover:text-white transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M24 4.557a9.826 9.826 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.184A4.917 4.917 0 0016.616 3c-2.737 0-4.948 2.235-4.948 4.987 0 .39.042.768.125 1.132C7.728 8.944 4.1 7.155 1.67 4.148c-.428.734-.673 1.587-.673 2.486 0 1.71.867 3.218 2.182 4.1a4.936 4.936 0 01-2.24-.618v.063c0 2.388 1.693 4.379 3.946 4.829a4.944 4.944 0 01-2.236.085c.63 2.017 2.46 3.482 4.63 3.522a9.872 9.872 0 01-6.102 2.105c-.397 0-.788-.023-1.174-.068a13.945 13.945 0 007.557 2.216c9.054 0 14.002-7.538 14.002-14.064 0-.214-.004-.428-.014-.64a9.925 9.925 0 002.449-2.548l-.047-.02z" />
                        </svg>
                    </a>
                    <a
                        href="#github"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <GitHub />
                    </a>
                    <a
                        href="#youtube"
                        className="text-gray-400 hover:text-white transition"
                    >
                        <YouTube />
                    </a>
                </div>

                <p className="text-gray-500">
                    &copy; 2024 Your Company, Inc. All rights reserved.
                </p>
            </div>
        </footer >
    );
};

export default Footer;