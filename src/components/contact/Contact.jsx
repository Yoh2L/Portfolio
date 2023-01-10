import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import datas from "../../datas/datas";

const Contact = (props) => {
	let content = "";
	props.language === "Francais"
		? (content = datas.Francais)
		: (content = datas.English);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_epc5hne",
				"template_acpjayf",
				form.current,
				"Jz_u1AdRsZrNQs41l"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		e.target.reset();
	};

	return (
		<section id="contact">
			<h5>{content.contact.title}</h5>
			<h2>{content.contact.subtitle}</h2>
			<div className="container contact__container">
				<form ref={form} onSubmit={sendEmail}>
					<input
						type="text"
						name="name"
						placeholder={content.contact.placeholder_name}
						required
					/>
					<input
						type="email"
						name="email"
						placeholder={content.contact.placeholder_mail}
						required
					/>
					<textarea
						name="message"
						cols="30"
						rows="7"
						placeholder={content.contact.placeholder_message}
						required
					></textarea>
					<button type="submit" className="btn btn-primary">
						{content.contact.send_btn}
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
