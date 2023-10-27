import React from "react";
import {motion} from "framer-motion";
import {achievement1, achievement3, achievement2, achievement11} from "../../assets"
import CardAchievement from "./CardAchievement";

const Achievement = () => {
    return (
        <>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.5}}}
                className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
            >
                <div className="flex-1">
                    <div className="py-6 font-titleFont flex flex-col gap-4">
                        <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
                        <h2 className="text-4xl font-bold">Voluntary activity</h2>
                    </div>
                    <div
                        className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <CardAchievement
                            title="Tree planting"
                            subTitle="Greening with 1000 trees with IT colleagues"
                            result="2022"
                            des="We worked for two days"
                            achievementImages={[achievement1, achievement2, achievement3]}
                        />

                    </div>
                </div>

            </motion.div>
            <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1, transition: {duration: 0.5}}}
                className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
            >
                <div className="flex-1">
                    <div
                        className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                        <CardAchievement
                            title="Training presentation"
                            subTitle="Scale Training Program with IT colleagues"
                            result="2023"
                            des="Scale Training Program to the Vanadzor"
                            achievementImages={[achievement11]}
                        />

                    </div>
                </div>

            </motion.div>
        </>

    );
};

export default Achievement;
