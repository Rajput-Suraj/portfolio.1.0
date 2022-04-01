import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

import { AppWrap } from "../../wrapper";
import { images } from "../../contants";
import "./Work.scss";

const Work = () => {
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    useEffect(() => {
        setWorks([
            {
                title: "Modern Website",
                description:
                    "A website built using modern HTML5, CSS3, flexbox and CSS Grid",
                link: "https://omnifood-surajrajput.netlify.app/",
                imageUrl: images.omnifood,
                tags: ["Website", "All"],
            },
            {
                title: "Spotify Clone",
                description:
                    "React appbuilt using React.js & used spotify API to get the user's playlists",
                link: "#",
                imageUrl: images.spotifyClone,
                tags: ["React JS", "All"],
            },
            {
                title: "Old Portfolio",
                description:
                    "This one is my old portfolio built using React.js",
                link: "https://suraj-rajput-portfolio.netlify.app/",
                imageUrl: images.oldPortfolio,
                tags: ["React JS", "All"],
            },
            {
                title: "YouTube Clone",
                description:
                    "A Dummy YouTube clone website built using React.js, Material UI",
                link: "https://rajput-suraj.github.io/youtube-clone/",
                imageUrl: images.youtube,
                tags: ["React JS", "All"],
            },
            {
                title: "Weather",
                description: "PWA built using React.js and Open Weather API",
                link: "https://mypwa-weather-app-react.netlify.app/",
                imageUrl: images.weather,
                tags: ["PWA", "All"],
            },
            {
                title: "React Drah n Grop",
                description:
                    "Drag and drop for lists with React & another external library",
                link: "https://suraj-react-drag-and-drop.netlify.app/",
                imageUrl: images.dnd,
                tags: ["React JS", "All"],
            },
        ]);
        setFilterWork([
            {
                title: "Modern Website",
                description:
                    "A website built using modern HTML5, CSS3, flexbox and CSS Grid",
                link: "https://omnifood-surajrajput.netlify.app/",
                imageUrl: images.omnifood,
                tags: ["Website", "All"],
            },
            {
                title: "Spotify Clone",
                description:
                    "React appbuilt using React.js & used spotify API to get the user's playlists",
                link: "#",
                imageUrl: images.spotifyClone,
                tags: ["React JS", "All"],
            },
            {
                title: "Old Portfolio",
                description:
                    "This one is my old portfolio built using React.js",
                link: "https://suraj-rajput-portfolio.netlify.app/",
                imageUrl: images.oldPortfolio,
                tags: ["React JS", "All"],
            },
            {
                title: "YouTube Clone",
                description:
                    "A Dummy YouTube clone website built using React.js, Material UI",
                link: "https://rajput-suraj.github.io/youtube-clone/",
                imageUrl: images.youtube,
                tags: ["React JS", "All"],
            },
            {
                title: "Weather App",
                description: "PWA built using React.js and Open Weather API",
                link: "https://mypwa-weather-app-react.netlify.app/",
                imageUrl: images.weather,
                tags: ["PWA", "All"],
            },
            {
                title: "React Drah n Grop",
                description:
                    "Drag and drop for lists with React & another external library",
                link: "https://suraj-react-drag-and-drop.netlify.app/",
                imageUrl: images.dnd,
                tags: ["React JS", "All"],
            },
        ]);
    }, []);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setAnimateCard([{ y: 100, opacity: 0 }]);

        setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === "All") {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };

    return (
        <>
            <h2 className="head-text">
                My <span>Portfolio</span> Section
            </h2>

            <div className="app__work-filter">
                {["Website", "React JS", "PWA", "All"].map((item, i) => (
                    <div
                        key={i}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item ? "item-active" : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {filterWork.map((work, i) => (
                    <div className="app__work-item app__flex" key={i}>
                        <div className="app__work-img app__flex">
                            <img src={work.imageUrl} alt={work.title} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{
                                    duration: 0.25,
                                    ease: "easeInOut",
                                    staggerChildren: 0.5,
                                }}
                                className="app__work-hover app__flex"
                            >
                                {work.link == "#" ? (
                                    <a href="#">
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="app__flex"
                                        >
                                            <AiFillEyeInvisible />
                                        </motion.div>
                                    </a>
                                ) : (
                                    <a
                                        href={work.link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                )}
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{work.title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {work.description}
                            </p>
                            <div className="app__work-tag app__flex">
                                <p className="p-text">{work.tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(Work, "work");
