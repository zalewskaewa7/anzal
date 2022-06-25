import React from "react";

import "./About.css";
import vf4 from "../Img/VF-4_lg1-removebg-preview.png";

import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();

    return (
        <div className="about">
            <article>
                <section id="aboutFirm">
                    <h1>ANZAL </h1>

                    <div className="contentAbout">
                        <img src={vf4} className="vf4" alt="cnc mahine VF-4" />
                        <p className="p1About">{t("ESTABLISHED")}</p>

                        <p className="p2About">{t("THANKS_TO")}</p>
                    </div>

                    <div className="make">
                        <h3> {t("MANUFACTURE")}:</h3>
                        <strong>
                            <ul>
                                <li>
                                    <h3> {t("MACHINE_PARTS")}</h3>
                                </li>
                                <li>
                                    <h3> {t("INSTRUMENTS")}</h3>
                                </li>
                                <li>
                                    <h3> {t("SPECJAL_TOLS")}</h3>
                                </li>
                                <li>
                                    <h3> {t("PROTORYPES")}</h3>
                                </li>
                            </ul>
                        </strong>
                    </div>
                    <p>{t("WE_OFFER")}</p>

                    <p> {t("INVITE_YOU")}</p>
                </section>
            </article>
        </div>
    );
}

export default About;
