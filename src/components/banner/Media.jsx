import React from 'react'
import {FaLinkedinIn, FaFacebook, FaTelegram} from "react-icons/fa";
import { SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a href="https://github.com/TTigran" target="_blank" rel="noopener noreferrer">
              <SiGithub /></a>
            </span>
            <span className="bannerIcon">
            <a href="martirosyantigran.developer@gmail.com">
              <SiGmail /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/tigranmartirosyan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://www.facebook.com/profile.php?id=100008227205459" target="_blank" rel="noopener noreferrer">
              <FaFacebook /></a>
            </span>
            <span className="bannerIcon">
            <a href="https://t.me/full_stack_developer_js" target="_blank" rel="noopener noreferrer">
              <FaTelegram /></a>
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media