import React from 'react'
import Title from '../layouts/Title'
import {
  projectFour,
  gambling,
  swimmingshcool,
  maplarge,
  verifone,
  blockchain,
  portfolio,
  livechat, quizfull
} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Map-Large"
          des="This project provide API for Map features dynamicly, when can you use in your services,projects"
          src={maplarge}
          githubLink=""
          websiteLink="https://maplarge.com/"

        />
        <ProjectsCard
          title="Live-Chat"
          des="This is a box live chat , by this you can talk and chat with support team"
          src={livechat}
          githubLink=""
          websiteLink="https://www.squarespace.com/extensions/details/livechat"
        />
        <ProjectsCard
          title="Cripto-Blockchain-Validation-Module"
          des=" This is a Module Validation service for Transactions for blockChain"
          src={blockchain}
          githubLink=""
          websiteLink="https://mihirs-secrets-sharing-website.onrender.com/"
        />
        <ProjectsCard
          title="Verifone"
          des=" This is a payment device, You can pay by VISA, Masters Cards ."
          src={verifone}
          githubLink=""
          websiteLink="https://mihirs-weather-website.onrender.com/"
        />
        <ProjectsCard
          title="Groups-Organizer-Swimming-School"
          des="By This project Swwiming shcool can organize some group shedules"
          src={swimmingshcool}
          githubLink=""
          websiteLink="https://www.goldfishswimschool.com/"
        />
        <ProjectsCard
            title="Quiz-Full-API"
            des="In this project you can check your code reading and analistic skills"
            src={quizfull}
            githubLink=""
            websiteLink="https://mihirc0111.github.io/AfterSchoolDiaries-HTML-CSS-JS-BootStrap-Website/"
        />
        <ProjectsCard
            title="Gambling"
            des="This project provide slots, live casino"
            src={gambling}
            githubLink=""
            websiteLink="https://goodwin.am/"
        />
        <ProjectsCard
            title="My Portfolio"
            des="This project provide information aboute me"
            src={portfolio}
            githubLink=""
            websiteLink="http://real-portfolio.s3-website-us-east-1.amazonaws.com/"
        />


      </div>
    </section>
  );
}

export default Projects