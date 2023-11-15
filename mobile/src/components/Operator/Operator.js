// импорт стилей
import "./Operator.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
// иконки
import Megafon from "../../image/megafon.svg";
import Mts from "../../image/mts.svg";
import Belain from "../../image/beelain.svg";

const Operator = () => {
	function handleClick() {
		console.log("hi");
	}
	// место
	return (
		<header className="operator" >
			<h2 className="operator__title">Выберите оператора</h2>
			<ul className="operator__container">
				<li className="operator__item">
					<button className="operator__button" onClick={handleClick}>
						<dev className="operator__logo">
							<img className="operator__image" src={Mts} alt="Логотип оператора" />
						</dev>
						<p className="operator__text">Мтс</p>
					</button>
				</li>
				<li className="operator__item">
					<button className="operator__button" onClick={handleClick}>
						<dev className="operator__logo">
							<img className="operator__image_megafon" src={Megafon} alt="Логотип оператора" />
						</dev>
						<p className="operator__text">Мегафон</p>
					</button>
				</li>
				<li className="operator__item">
					<button className="operator__button" onClick={handleClick}>
						<dev className="operator__logo">
							<img className="operator__image" src={Belain} alt="Логотип оператора" />
						</dev>
						<p className="operator__text">Билайн</p>
					</button>
				</li>
			</ul>
		</header>
	);
};
export default Operator;
