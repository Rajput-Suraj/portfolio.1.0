import React from "react";
import { motion } from "framer-motion";

import AppWrap from "../../wrapper/AppWrap";
import { images } from "../../contants";
import "./About.scss";

const abouts = [
    {
        title: "Frontend Developer",
        description:
            "I am a frontend developer with a passion for building beautiful and functional web applications.",
        imgUrl: images.about01,
    },
    {
        title: "Web Development",
        description:
            "I'm a developer, so I know how to create your website to run across devices using the latest technologies available.",
        imgUrl: images.about02,
    },
];

const About = () => {
    return (
        <>
            <h2 className="head-text">
                I Know That <span>Good Design</span> means{" "}
                <span>Good Busines</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, i) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__profile-item"
                        key={`${about.title}${i}`}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <p className="p-text" style={{ marginTop: 10 }}>
                            {about.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(About, "about");
