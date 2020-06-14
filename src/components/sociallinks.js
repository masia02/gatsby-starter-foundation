import React from "react";
import {
  FaFacebook,
  FaMedium,
  FaYoutube,
  FaInstagram,
  FaTwitter
} from "react-icons/lib/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="https://twitter.com/masia02">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.facebook.com/masia02/">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.youtube.com/channel/UCElM54CRdUGHY140tDd4Bgg/">
        <FaYoutube />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/masia02/">
        <FaInstagram />
      </a>
    </li>
    <li>
      <a href="https://medium.com/cipher-web">
        <FaMedium />
      </a>
    </li>
  </ul>
);

export default SocialLinks;
