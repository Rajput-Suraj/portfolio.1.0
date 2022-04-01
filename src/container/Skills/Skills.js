import React, { useEffect, useState } from "react";
import ReactTooltip from "react-tooltip";
import { motion } from "framer-motion";

import { AppWrap, MotionWrap } from "../../wrapper";
import { images } from "../../contants";

import "./Skills.scss";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        setSkills([
            {
                name: "React.js",
                bgColor: "",
                icon: images.react,
            },
            {
                name: "JavaScript",
                bgColor: "",
                icon: images.javascript,
            },
            {
                name: "HTML5",
                bgColor: "",
                icon: images.html,
            },
            {
                name: "CSS3",
                bgColor: "",
                icon: images.css,
            },
            {
                name: "GIT",
                bgColor: "",
                icon: images.git,
            },
            // {
            //     name: "Node JS",
            //     bgColor: "",
            //     icon: images.node,
            // },
            {
                name: "Redux",
                bgColor: "",
                icon: images.redux,
            },
            {
                name: "Material UI",
                bgColor: "",
                icon: images.mu5,
            },
            {
                name: "REST API",
                bgColor: "",
                icon: images.api,
            },
        ]);
        setExperiences([
            {
                year: "2018",
                works: [
                    {
                        name: "Full Stack Developer",
                        company: "Triwits Technologies Pvt Ltd",
                        desc: "I've worked as a fullstack developer on PHP framework (CodeIgniter) and used template's in frontend side",
                    },
                ],
            },
            {
                year: "2020",
                works: [
                    {
                        name: "React Developer",
                        company: "Assystant Technologies Pvt Ltd",
                        desc: "Working full-time as a React.js developer",
                    },
                ],
            },
        ]);
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience.year}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work) => (
                                    <>
                                        {console.log("work", work)}
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip={work.name}
                                            data-for={work.name}
                                            key={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactTooltip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactTooltip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
