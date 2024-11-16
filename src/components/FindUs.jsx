import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-semibold mt-3">Find Us On</h2>
      <div className="join join-vertical flex *:bg-base-100">
        <a
          className="btn join-item justify-start"
          href="https://www.facebook.com/sahabulislamsifat"
          target="_blank"
        >
          <FaFacebook></FaFacebook> Facebook
        </a>

        <a
          className="btn join-item justify-start"
          href="https://www.instagram.com/sahabulislamsifat/"
        >
          <FaInstagram></FaInstagram> Instagram
        </a>
        <a
          className="btn justify-start join-item"
          href="https://x.com/sifat016"
        >
          <FaTwitter></FaTwitter> Twitter
        </a>
      </div>
    </div>
  );
};

export default FindUs;
