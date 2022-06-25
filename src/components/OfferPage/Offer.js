import React from "react";

import "./Offer.css";
import photo1 from "../Img/IMG_20201229_215801__Kopiowanie_-removebg-preview.png";
import photo2 from "../Img/IMG_20201130_190657__Kopiowanie_-removebg-preview.png";
import photo3 from "../Img/IMG_20210130_200622__Kopiowanie_-removebg-preview.png";

import { useTranslation } from "react-i18next";
function Offer() {
    const { t} = useTranslation();

    return (
        <div className="offer">
            <article>
                <section id="offer">
                    <h1 id="offerH2">{t("OFFER_PAGE")}</h1>

                    <div className="offerImages">
                        <img
                            className="photo"
                            src={photo2}
                            alt="cnc mahine for work"
                        />
                        <img
                            className="photo"
                            src={photo3}
                            alt="cnc mahined parts"
                        />
                    </div>
                </section>

                <section className="descriptionOffer">
                    <div className="offering">
                        <h3> {t("WE_OFFER_YOU")}</h3>
                        <ul>
                            <li>
                                <h4>{t("MILLING_SERVICES")}</h4>
                            </li>
                            <li>
                                <h4>{t("CUTTING")}</h4>
                            </li>
                            <li>
                                <h4>{t("DRILLING")}</h4>
                            </li>
                            <li>
                                <h4>{t("THREADING")}</h4>
                            </li>
                            <li>
                                <h4>{t("GLASS")}</h4>
                            </li>

                            <li>
                                <h4>{t("CAD_3D")}</h4>
                            </li>
                        </ul>
                    </div>

                    <div className="materials">
                        <h3>{t("MATERIALS")}</h3>
                        <ul>
                            <li>{t("STEEL")}</li>
                            <li>{t("ALUMINIUM")}</li>
                            <li>{t("CONSTRUCTION_MATERIALS")}</li>
                        </ul>
                    </div>

                    <img
                        className="cncmachine"
                        src={photo1}
                        alt="cnc machine at work"
                    />
                    <p>{t("CONVENIENT_DELIVERY")}</p>

                    <p>{t("SEND_US")}</p>
                </section>
            </article>
        </div>
    );
}

export default Offer;
