import React from "react";

import facebook from "../icons/Facebook.svg";
import instagram from "../icons/Instagram.svg";
import twitter from "../icons/Twitter.svg";
import youtube from "../icons/Youtube.svg";

export default function SocialSideBar() {
  return (
    <div className="socialSideBar d-flex align-items-center justify-content-center flex-column py-2">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noreferrer"
        className="px-1 mx-2"
      >
        <img
          className="my-2 text-white"
          src={facebook}
          alt="ToFacebook"
          width="20"
        />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noreferrer"
        className="px-1 mx-2"
      >
        <img
          className="my-2 text-white"
          src={instagram}
          alt="ToInstagram"
          width="20"
        />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noreferrer"
        className="px-1 mx-2"
      >
        <img
          className="my-2 text-white"
          src={twitter}
          alt="ToTwitter"
          width="20"
        />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noreferrer"
        className="px-1 mx-2"
      >
        <img
          className="my-2 text-white"
          src={youtube}
          alt="ToYoutube"
          width="20"
        />
      </a>
    </div>
  );
}
