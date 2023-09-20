import React, { useContext, useEffect, useState } from "react";

const translationContext = React.createContext();

export const TranslationProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");
	const [translations, setTranslations] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTranslations = async () => {
			setLoading(true);
			const response = await fetch(`/locales/${language}.json`);
			const data = await response.json();
			setTranslations(data);
			setLoading(false);
		};
		fetchTranslations();
	}, [language]);

	const value = {
		language,
		setLanguage,
		translations,
		loading,
	};

	return (
		<translationContext.Provider value={value}>
			{children}
		</translationContext.Provider>
	);
};

export const useTranslation = () => {
	const context = useContext(translationContext);

	if (context === undefined) {
		throw new Error("useTranslation must be used within a TranslationProvider");
	}

	const { language, setLanguage, translations, loading } = context;

	const t = (key) => {
		const keys = key.split(".");
		let translation = { ...translations };
		keys.forEach((key) => {
			translation = translation[key];
		});
		return translation;
	};
	return { language, setLanguage, loading, t };
};
