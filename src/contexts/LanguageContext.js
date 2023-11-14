

import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('turkish');

    const toggleLanguage = () => {
        setLanguage(prevLanguage => (prevLanguage === 'turkish' ? 'english' : 'turkish'));

    };

    const texts = {
        turkish: {
            buttonText: 'İngilizce\'ye geç',
            darkmode: "Karanlık mod",
            dil: "Turn English",
            headertext: "Ben bir ön uç geliştiricisiyim."

        },
        english: {
            buttonText: 'Switch to Turkish',

        },
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, texts }}>
            {children}
        </LanguageContext.Provider>
    );
};
