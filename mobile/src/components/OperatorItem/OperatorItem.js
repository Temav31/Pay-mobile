// импорт стилей
import "./OperatorItem.css";
import React from "react";

const OperatorItem = ({ item, onClick }) => {
	function handleClick() {
		// console.log(item)
		onClick(item.name);
	}
	return (

		<li className="operator-item__item" key={item.name}>
			<button className="operator-item__button" onClick={handleClick}>
				<div className="operator-item__logo">
					<img className="operator-item__image" src={item.src} alt="Логотип оператора" />
				</div>
				<p className="operator-item__text">{item.name}</p>
			</button>
		</li>
	);
};
export default OperatorItem;
