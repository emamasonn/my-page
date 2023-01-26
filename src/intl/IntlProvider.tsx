import React, { createContext, useState, useCallback } from "react";
import { IntlProvider as I18nProvider } from "react-intl";

import en from "./messages/en.json";
import es from "./messages/es.json";

export type TLanguages = "es" | "en";

export const I18nProviderContext = createContext<Record<string, any>>({});

const messages: Record<string, any> = {
  en: en,
  es: es,
};

const flattenMessages = (nestedMessages: any, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

const IntlProvider = ({ children }: any) => {
  const [language, setLanguage] = useState<TLanguages>("es");

  const changeLanguage = useCallback((lang: TLanguages) => {
    setLanguage(lang);
  }, []);

  return (
    <I18nProviderContext.Provider value={{ language, changeLanguage }}>
      <I18nProvider
        locale={language}
        messages={flattenMessages(messages[language])}
      >
        {children}
      </I18nProvider>
    </I18nProviderContext.Provider>
  );
};
export default IntlProvider;
