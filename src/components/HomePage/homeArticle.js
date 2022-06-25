import React from "react";

import "./homeArticle.css";

import { useTranslation } from "react-i18next";
function HomeArticle() {
    const { t } = useTranslation();

    return (
        <div className="homeArticle">
            <article>
                <h2>{t("PRECISION_CNC")}</h2>
            </article>
        </div>
    );
}

export default HomeArticle;
