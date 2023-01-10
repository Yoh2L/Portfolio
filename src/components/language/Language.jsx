import React, { useState } from "react";
import "./language.css";
import Francais from "../../assets/french-flag.png";
import English from "../../assets/english-flag.png";

const Language = (props) => {
	const [edit, setEdit] = useState(false);
	const [flag, setFlag] = useState("Francais");

	return (
		<div className="container__language fixed-top">
			<button
				className="select_language--btn selected--btn"
				onClick={() => setEdit(!edit)}
			>
				{flag === "Francais" ? (
					<img src={Francais} alt="french flag"></img>
				) : (
					<img src={English} alt="english flag"></img>
				)}
			</button>
			{edit ? (
				<>
					<button
						className="select_language--btn"
						onClick={(e) => {
							props.handleSetLanguage("Francais");
							setEdit(!edit);
							setFlag("Francais");
						}}
					>
						<img src={Francais} alt="" />
					</button>
					<button
						className="select_language--btn"
						onClick={(e) => {
							props.handleSetLanguage("English");
							setEdit(!edit);
							setFlag("English");
						}}
					>
						<img src={English} alt="" />
					</button>
				</>
			) : (
				""
			)}
		</div>
	);
};

export default Language;
