import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";
import datas from "../../datas/datas";

const Services = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);
	return (
		<section id="services">
			<h5>{content.service.title}</h5>
			<h2>{content.service.subtitle}</h2>

			<div className="container services__container">
				<article className="service">
					<div className="service__head">
						<h3>{content.service.cat1_title}</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat1_line1}</p>
						</li>
					</ul>
				</article>
				<article className="service">
					<div className="service__head">
						<h3>{content.service.cat2_title}</h3>
					</div>
					<ul className="service__list">
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat2_line1}</p>
						</li>
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat2_line2}</p>
						</li>
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat2_line3}</p>
						</li>
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat2_line4}</p>
						</li>
						<li>
							<BsCheckLg className="service__list-icon" />
							<p>{content.service.cat2_line5}</p>
						</li>
					</ul>
				</article>
			</div>
		</section>
	);
};

export default Services;
