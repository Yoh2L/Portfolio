import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/corr_exposition.png";
import HeaderSocials from "./HeaderSocials";
import { FaArrowRight } from "react-icons/fa";
import datas from "../../datas/datas";

const Header = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);
	return (
		<header>
			<div className="container header__container">
				<h5>{content.greetings}</h5>
				<h1> {content.name}</h1>
				<h5 className="text-light">{content.title}</h5>
				<CTA content={content.cta} />
				<HeaderSocials />

				<div className="me">
					<img src={ME} alt="" />
				</div>

				<a href="#contact" className="scroll__down">
					Scroll Down <FaArrowRight />
				</a>
			</div>
		</header>
	);
};

export default Header;
