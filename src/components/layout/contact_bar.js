import React from "react";

import "../layoutCss/contact_bar.css";
import minismartphone from "../layoutImg/minismartphone.png";
import minienvelope from "../layoutImg/minienvelope.png";
import i18n from "../i18n";
import { AiOutlineGlobal } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const changeLanguage = (ln) => {
    return () => {
        i18n.changeLanguage(ln);
    };
};

function Contact_bar() {
    const { t } = useTranslation();

    return (
        <div className="contact_bar">
            <ul>
                <li>
                    {" "}
                    <a href="tel: 508 617 263">
                        <img src={minismartphone} alt="minismartphone" /> 508
                        617 263
                    </a>
                </li>
                <li>
                    <img src={minienvelope} alt="minienvelope" />{" "}
                    anzalcnc@gmail.com
                </li>
            </ul>
            <div className="changeLanguage">
                <AiOutlineGlobal className="glob" />

                <select>
                    <option value="1" onClick={changeLanguage("pl")}>
                        {t("PL")}
                    </option>
                    <option value="2" onClick={changeLanguage("en")}>
                        {t("EN")}
                    </option>
                </select>
            </div>
        </div>
    );
}

export default Contact_bar;
