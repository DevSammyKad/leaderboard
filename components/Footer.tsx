import React from 'react';

const Footer = () => {
  return (
    <footer className=" rounded-lg shadow m-4 ">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <a href="/" className="hover:underline">
            RSAI
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="privacy-policy" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>

          <li>
            <a
              href="/contact-us"
              className="hover:underline  text-blue-500 text-base"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;