// import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-black py-4 px-6 text-center flex justify-center">
      <div className="mx-auto text-center md:flex md:items-center md:justify-between">
        <p>
          &copy; {new Date().getFullYear()} ShoppyGlobe. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;