import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a
                    href="https://github.com/Rajput-Suraj"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsGithub />
                </a>
            </div>
            <div>
                <a
                    href="https://www.linkedin.com/in/suraj-rajput-839b4b19a/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <BsLinkedin />
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;