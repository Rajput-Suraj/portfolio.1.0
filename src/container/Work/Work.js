import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import { animate, motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import "./Work.scss";

const Work = () => {
    const [filterWork, setFilterWork] = useState([]);
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

    const handleWorkFilter = (item) => {};

    return (
        <>
            <h2 className="head-text">
                My <span>Portfolio</span> Section
            </h2>

            <div className="app__work-filter">
                {["Website", "React JS", "All"].map((item, i) => (
                    <div
                        key={i}
                        onClick={handleWorkFilter(item)}
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
                            <img src="" alt={work.name} />
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default Work;
