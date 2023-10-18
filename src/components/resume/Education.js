import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2011 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
              title="National Polytechnic University of Armenia, Gyumri"
              subTitle="Information Technologies"
              result="2019-2023"
              des="Diploma of bachelor specialist Software Engineering"
          />
          <ResumeCard
            title="GTC"
            subTitle="Java Developer"
            result="2020(Jun-Dec)"
            des="Cercificate of Java Developer"
          />
          <ResumeCard
              title="GTC and MIC"
              subTitle="Javascript Developer"
              result="2017-2018"
              des="Cercificate of Javascript Developer"
          />
          <ResumeCard
              title="Gyumri State Technical College"
              subTitle="Transportation/Mobility Management"
              result="2011-2015"
              des="Diploma of Technical Transport Specialist"
          />

        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Coding skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="HackerRank:Associates"
            subTitle="SQL Intermediate"
            result="Online"
            des="https://www.hackerrank.com/certificates/15dcf0b1b9c4"
          />
          <ResumeCard
              title="HackerRank:Associates"
              subTitle="Javascript Intermediate"
              result="Online"
              des="https://www.hackerrank.com/certificates/d9cf48adfaa0"
          />
          <ResumeCard
              title="HackerRank:Associates"
              subTitle="Java Basic"
              result="Online"
              des="https://www.hackerrank.com/certificates/cf86cd8c92ac"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education