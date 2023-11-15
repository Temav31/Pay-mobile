// импорт стилей
import "./Footer.css";
import React from "react";

const Footer = () => {
	return (
		<section className="footer">
			<h2 className="footer__head">
				Лендинг для пополнения баланса
			</h2>
			<div className="footer__box">
				<ul className="footer__container">
					<li>
						<p className="footer__link">
							Васильев Артём
						</p>
					</li>
					<li>
						<a className="footer__link" href='https://github.com/Temav31/Pay-mobile' target="_blank" rel="noopener noreferrer">
							Github
						</a>
					</li>
				</ul>
				<p className="footer__text">
					©2023
				</p>
			</div>
		</section>
	);
};
export default Footer;
