// импорт стилей
import "./Header.css";
import React from "react";
import Logo from "../../image/logoPay.svg";

const Header = () => {
	// const value = true;
	// место
	return (
		<header className="header" >
			<div className="header__logo">
				<img className="header__image" src={Logo} alt="Лого" />
			</div>
			<h1 className='header__title'>Пополнение баланса телефона </h1>
		</header>
	);
};
export default Header;
