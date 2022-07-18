import React from "react";
import "../layoutCss/cookie.css";


import { useTranslation } from "react-i18next";

function CookieWarn() {
    const { t } = useTranslation();

    function closeCookie() {
        let cookie = document.getElementById("cookie-warn");
        cookie.style.display = "none";
    }
    return (
        <section className="cookieWarn" id="cookie-warn">
            <p>
                <strong> {t("WARNING!")}</strong> {t("COOKIES")}
                    
                <button onClick={closeCookie} className="closeCookie">
                    {" "}
                    {t("ACCEPT")}
                </button>
            </p>
        </section>
    );
}
export default CookieWarn;
