import React from "react";
import "./about.css";
import ME from "../../assets/pp.jpg";
import { VscFolderLibrary } from "react-icons/vsc";
import datas from "../../datas/datas";

const About = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);

	return (
		<section id="about">
			<h5>{content.about.about1}</h5>
			<h2>{content.about.about2}</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={ME} alt="About me" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>{content.project.project1}</h5>
							<small>10+ {content.project.project2}</small>
						</article>
					</div>
					<p>{content.pitch.pitch1}</p>
					<p>{content.pitch.pitch2}</p>
					<p>{content.pitch.pitch3}</p>
					<p>{content.pitch.pitch4}</p>
					<a href="#contact" className="btn btn-primary cta--about">
						{content.pitch.pitch5}
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
