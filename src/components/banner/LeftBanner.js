import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Data Scientist.","Wildlife Enthusiast Capturing Wonders Through My Lens 📸"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Hola Amingos 👀🙋‍♂️  </h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Tigran Martirosyan</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I'm a seasoned Software Engineer with nearly 4 years of experience in both
            backend and full-stack development. I excel at seamlessly transitioning between
            backend and frontend technologies, crafting user-centric solutions, and
            embracing cross-platform web development. My expertise spans Monolith and
            Microservices architectures, backed by efficient CI/CD practices. I thrive in
            collaborative settings, leveraging strong communication, critical thinking, and
            creativity. My unwavering motivation, organizational skills, and boundless energy
            drive me to excel in delivering solutions that surpass expectations. I see myself
            as an experience craftsman, dedicated to bridging ideas and reality in the
            ever-evolving tech world."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner