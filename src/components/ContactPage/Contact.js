import React from "react";
import "./Contact.css";
import minismartphone from "../layoutImg/minismartphone.png";
import minienvelope from "../layoutImg/minienvelope.png";
import miniplaceholder from "../layoutImg/miniplaceholder.png";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    return (
        <article>
            <section id="contact">
                <h1>{t("CONTACT")}</h1>
                <div className="contact-area">
                    <div className="telephone">
                        <div className="contact-center">{t("CALL_US")}</div>
                        <ul>
                            <li>mgr inż. Michał Frodyma</li>
                            <li>
                                <img
                                    src={minismartphone}
                                    alt="minismartphone"
                                />{" "}
                                <b>508 617 263</b>
                            </li>
                            <li>mgr Anna Zalewska-Frodyma</li>
                            <li>
                                <img
                                    src={minismartphone}
                                    alt="minismartphone"
                                />{" "}
                                <b>500 227 698</b>
                            </li>
                            <li>
                                <img src={minienvelope} alt="minienvelope" />{" "}
                                anzalcnc@gmail.com
                            </li>
                        </ul>
                    </div>

                    <div className="adress">
                        <div className="contact-center">
                            {t("CONTACT_DETAILS")}
                        </div>
                        {/*<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                             <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                              <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>  
*/}
                        <ul>
                            <li>
                                <img
                                    src={miniplaceholder}
                                    alt="miniplaceholder"
                                />
                                Turka 15C
                                <br />
                                20-258 Lublin, {t("POLAND")}
                            </li>
                        </ul>
                        <div className="open">
                            {t("HOURS")}
                            <br />
                            {t("WEEK")}
                            <br />
                            {t("WEEK_HOURS")}
                            <br />
                            {t("SATURDAY")}
                            <br />
                            {t("SATURDAY_HOURS")}
                        </div>
                    </div>

                    <div className="map">
                        <iframe
                        title="Anzal"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79848.86257672508!2d22.600207554707314!3d51.28762717959958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4722519bb0255655%3A0x507dce6a0eb0bdef!2sAnzal%20Micha%C5%82%20Frodyma!5e0!3m2!1spl!2spl!4v1575410873393!5m2!1spl!2spl"
                            width="800"
                            height="450"
                            frameBorder="0"
                            style={{ border: 0 }}
                            allowFullScreen=""
                        ></iframe>
                    </div>
                </div>
            </section>

        </article>
    );
}
