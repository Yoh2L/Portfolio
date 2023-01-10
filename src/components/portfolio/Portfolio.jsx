import React, { useState, useEffect } from "react";
import "./portfolio.css";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { BsCircleFill } from "react-icons/bs";
import datas from "../../datas/datas";

import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio6.jpg";
import IMG7 from "../../assets/portfolio7.jpg";
import IMG8 from "../../assets/portfolio8.jpg";
import IMG9 from "../../assets/portfolio9.jpg";
import IMG10 from "../../assets/portfolio10.jpg";

const data = [
	{
		id: 1,
		image: IMG1,
		title: "Booki",
		github: "https://github.com/Yoh2L/P2-Booki",
		demo: "https://yoh2l.github.io/P2-Booki/",
	},
	{
		id: 2,
		image: IMG2,
		title: "Ohmyfood",
		github: "https://github.com/Yoh2L/P3-Ohmyfood",
		demo: "https://yoh2l.github.io/P3-Ohmyfood/",
	},
	{
		id: 3,
		image: IMG3,
		title: "GameOn",
		github: "https://github.com/Yoh2L/P4-GameOn",
		demo: "https://yoh2l.github.io/P4-GameOn/",
	},
	{
		id: 4,
		image: IMG4,
		title: "FishEye",
		github: "https://github.com/Yoh2L/P6-Fisheye",
		demo: "https://yoh2l.github.io/P6-Fisheye/",
	},
	{
		id: 5,
		image: IMG5,
		title: "Les petits plats",
		github: "https://github.com/Yoh2L/P7-Les_Petits_Plats",
		demo: "https://yoh2l.github.io/P7-Les_Petits_Plats/",
	},
	{
		id: 6,
		image: IMG6,
		title: "BilledApp",
		github: "https://github.com/Yoh2L/P9-Billed_App",
	},
	{
		id: 7,
		image: IMG7,
		title: "Kasa",
		github: "https://github.com/Yoh2L/P11-Kasa",
	},
	{
		id: 8,
		image: IMG8,
		title: "SportSee",
		github: "https://github.com/Yoh2L/P12-SportSee",
	},
	{
		id: 9,
		image: IMG9,
		title: "Argent Bank",
		github: "https://github.com/Yoh2L/P13-Bank_API",
	},
	{
		id: 10,
		image: IMG10,
		title: "HRnet",
		github: "https://github.com/Yoh2L/P14-HRnet",
	},
];

const Portfolio = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);

	const [sliceDatas, setSliceDatas] = useState(data.slice(0, 3));
	const [index, setIndex] = useState(0);
	const length = Math.ceil(data.length / 3);
	const [swipeDirection, setSwipeDirection] = useState("");
	const [indexIcon, setIndexIcon] = useState([]);

	const handlePrevious = () => {
		const newIndex = index - 1;
		setSwipeDirection("swipe-left");
		setIndex(newIndex < 0 ? length - 1 : newIndex);
	};

	const handleNext = () => {
		const newIndex = index + 1;
		setSwipeDirection("swipe-right");
		setIndex(newIndex >= length ? 0 : newIndex);
	};

	useEffect(() => {
		setSliceDatas(data.slice(index * 3, (index + 1) * 3));
		setIndexIcon([]);
		for (let i = 0; i < length; i++) {
			if (i === index) {
				setIndexIcon((indexIcon) => [...indexIcon, <BsCircleFill key={i} />]);
			} else {
				setIndexIcon((indexIcon) => [...indexIcon, <BsCircle key={i} />]);
			}
		}
	}, [index, length]);

	return (
		<section id="portfolio">
			<h5>{content.portfolio.title}</h5>
			<h2>{content.portfolio.subtitle}</h2>
			<div className="container portfolio__container">
				<div className="container portfolio__carousel">
					<button className="leftArrow_carousel" onClick={handlePrevious}>
						<FaRegArrowAltCircleLeft />
					</button>
					<div className="portfolio__carousel-index">{indexIcon}</div>
					<button className="rightArrow_carousel" onClick={handleNext}>
						<FaRegArrowAltCircleRight />
					</button>
				</div>
				{sliceDatas.map(({ id, image, title, github, demo }) => {
					return (
						<article key={id} className={`portfolio__item ${swipeDirection}`}>
							<div className="portfolio__item-image">
								<img src={image} alt="" />
							</div>
							<h3>{title}</h3>
							<div className="portfolio__item-cta">
								{github ? (
									<a
										href={github}
										target="_blank"
										rel="noreferrer"
										className="btn"
									>
										Github
									</a>
								) : (
									""
								)}
								{demo ? (
									<a
										href={demo}
										target="_blank"
										rel="noreferrer"
										className="btn btn-primary"
									>
										Live Demo
									</a>
								) : (
									""
								)}
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default Portfolio;
