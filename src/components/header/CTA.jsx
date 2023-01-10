import React from "react";
import CV from "../../assets/cv.pdf";

const CTA = (content) => {
	return (
		<div className="cta">
			<a href={CV} download className="btn">
				{content.content.cta1}
			</a>
			<a href="#contact" className="btn btn-primary">
				{content.content.cta2}
			</a>
		</div>
	);
};

export default CTA;
