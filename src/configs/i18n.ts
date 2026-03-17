import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import type { CustomDetector } from "i18next-browser-languagedetector";
import { SafeLocalStorage } from "@/utils/safeStorage";
import CONSTANTS from "@/utils/constants";

import vi from "@/locales/vi.json";
import en from "@/locales/en.json";

export const defaultNS = "translation";
export const resources = {
  vi: { translation: vi },
  en: { translation: en },
} as const;

const safeStorageDetector: CustomDetector = {
  name: "safeStorage",

  lookup() {
    return SafeLocalStorage.getItem(CONSTANTS.LOCAL_STORAGE_KEYS.LANG, CONSTANTS.LOCAL_STORAGE_KEYS.LANG) ?? undefined;
  },

  cacheUserLanguage(lng: string) {
    SafeLocalStorage.setItem(CONSTANTS.LOCAL_STORAGE_KEYS.LANG, lng, CONSTANTS.LOCAL_STORAGE_KEYS.LANG);
  },
};

const detector = new LanguageDetector();
detector.addDetector(safeStorageDetector);

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["safeStorage", "navigator"],
      caches: ["safeStorage"],
    },
  });

export default i18n;
