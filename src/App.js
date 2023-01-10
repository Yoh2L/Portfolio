import React from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Language from "./components/language/Language";
import { useState } from "react";

const App = () => {
	/* let languageLocalStorage = localStorage.getItem("language"); */
	const [language, setLanguage] = useState("Francais");

	/* 	const handleLocalStorage = () => {
		localStorage.setItem("language", language);
	}; */

	return (
		<>
			<Language
				language={language}
				handleSetLanguage={(language) => {
					setLanguage(language);
					/* handleLocalStorage(language); */
				}}
			/>
			<Header language={language} />
			<Nav />
			<About language={language} />
			<Experience language={language} />
			<Services language={language} />
			<Portfolio language={language} />
			<Contact language={language} />
			<Footer language={language} />
		</>
	);
};

export default App;
