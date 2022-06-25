import React from "react";

import "../layoutCss/navigation.css";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

function Navigation() {
    const { t } = useTranslation();
   

    return (
        <div className="navigation">
            <nav id="nav">
                <ul>
                    <li>
                        <Link to="/" title={t("HOME")}>
                            {t("HOME")}
                        </Link>
                    </li>
                    <li>
                        <Link to={t("/ABOUT")} title={t("INFORMATION_ABOUT")}>
                            {t("ABOUT")}
                        </Link>
                    </li>
                    <li>
                        <Link to={t("/OFFER")} title={t("OUR_OFFER")}>
                            {t("OFFER")}
                        </Link>
                    </li>
                    <li>
                        <Link to={t("/CONTACT")} title={t("CONTACT")}>
                            {t("CONTACT")}
                        </Link>
                    </li>
                    <li>
                        <Link to={t("/PROJECTS")} title={t("GALLERY")}>
                            {t("PROJECTS")}
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navigation;
