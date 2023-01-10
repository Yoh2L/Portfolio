/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./footer.css";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import datas from "../../datas/datas";
import pp from "../../assets/pp.jpg";

const Footer = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);
	return (
		<footer>
			<a href="#" className="footer__logo">
				<img src={pp} alt="Logo" />
			</a>
			<ul className="permalinks">
				<li>
					<a href="#">{content.footer.home}</a>
				</li>
				<li>
					<a href="#about">{content.footer.about}</a>
				</li>
				<li>
					<a href="#experience">{content.footer.experience}</a>
				</li>
				<li>
					<a href="#services">{content.footer.services}</a>
				</li>
				<li>
					<a href="#portfolio">{content.footer.portfolio}</a>
				</li>
				<li>
					<a href="#contact">{content.footer.contact}</a>
				</li>
			</ul>

			<div className="footer__socials">
				<a
					href="https://www.linkedin.com/in/yohan-deletoille
"
					target="_blank"
					rel="noreferrer"
				>
					<BsLinkedin />
				</a>
				<a href="https://github.com/Yoh2L" target="_blank" rel="noreferrer">
					<FaGithub />
				</a>
			</div>

			<div className="footer__copyright">
				<small>&copy; Yohan Deletoille. All rights reserved.</small>
			</div>
		</footer>
	);
};

export default Footer;
