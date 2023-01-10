import React from "react";
import "./experience.css";
import { FaCss3Alt } from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import datas from "../../datas/datas";

const Experience = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);
	return (
		<section id="experience">
			<h5>{content.experience.title}</h5>
			<h2>{content.experience.title2}</h2>
			<div className="container experience__container">
				<div className="experience__frontend">
					<h3>{content.experience.subtitle}</h3>
					<div className="experience__content">
						<article className="experience__details">
							<AiFillHtml5 className="experience__details-icon" />
							<div>
								{" "}
								<h4>HTML</h4>
								<small className="text-light">
									{content.experience.skill1}
								</small>
							</div>
						</article>
						<article className="experience__details">
							<FaCss3Alt className="experience__details-icon" />
							<div>
								<h4>CSS</h4>
								<small className="text-light">
									{content.experience.skill2}
								</small>
							</div>
						</article>
						<article className="experience__details">
							<FaSass className="experience__details-icon" />
							<div>
								<h4>Sass</h4>
								<small className="text-light">
									{content.experience.skill3}
								</small>
							</div>
						</article>
						<article className="experience__details">
							<IoLogoJavascript className="experience__details-icon" />
							<div>
								<h4>JavaScript</h4>
								<small className="text-light">
									{content.experience.skill4}
								</small>
							</div>
						</article>
						<article className="experience__details">
							<FaReact className="experience__details-icon" />
							<div>
								<h4>React</h4>
								<small className="text-light">
									{content.experience.skill5}
								</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
