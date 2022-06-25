import React from "react";

import "./Home.css";
import cnc from "../Img/cnc.jpeg";
import HomeArticle from "./homeArticle";

import { useTranslation } from "react-i18next";
function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <h1>{t("PROFESSIONAL")}</h1>
            <img id="cnc" src={cnc} alt="cnc machine at working"></img>

            <HomeArticle />
        </div>
    );
}

export default Home;
