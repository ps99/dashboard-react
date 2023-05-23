import React from 'react';

const currentYear = new Date().getFullYear();
const locationLink = `${window.location.protocol}//${window.location.hostname}`;

const Footer = () => (
  <div className="mt-24">
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      &copy; {currentYear} All rights reserved by Shoppy [{locationLink}]
    </p>
  </div>
);

export default Footer;
