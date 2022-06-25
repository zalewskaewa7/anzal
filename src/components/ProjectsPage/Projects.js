import React from "react";

import "./Projects.css";
import Images from "./Images";


import { useTranslation } from "react-i18next";

function Projects() {
    const { t} = useTranslation();

    return (
        <div className="projects">
            <h1>{t("OUR_PROJECTS")}</h1>
            <Images />
        </div>
    );
}

export default Projects;
