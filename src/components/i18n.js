import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import En from "./en.json";
import Pl from "./pl.json";





i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'pl',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      pl: {
        translation: Pl,
    },
        en: {
            translation: En,
        },
        
    }
  });

export default i18n;


//the translations
// const resources = {
//     en: {
//         translation: En,
//     },
//     pl: {
//         translation: Pl,
//     },
// };

// i18n
// .use(Backend)
//     // detect user language
//     // learn more: https://github.com/i18next/i18next-browser-languageDetector
//      .use(LanguageDetector)
//     // pass the i18n instance to react-i18next.
//      .use(translate)
//     // init i18next
//     // for all options read: https://www.i18next.com/overview/configuration-options
//     .init({
//         lng: "pl",
//         backend: {
//             /* translation file path */
//             loadPath: "/assets/i18n/{{ns}}/{{lng}}.json",
//         },
//         fallbackLng: "en",
//         debug: true,
//         /* can have multiple namespace, in case you want to divide a huge translation into smaller pieces and load them on demand */
//         ns: ["translations"],
//         defaultNS: "translations",
//         keySeparator: false,
//         interpolation: {
//             escapeValue: false,
//             formatSeparator: ",",
//         },
//         react: {
//             wait: true,
//             useSuspense: true,
//         },
//     });

// export default i18n;
