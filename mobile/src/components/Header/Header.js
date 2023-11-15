// импорт стилей
import "./Header.css";
import React from "react";
import { Link, useLocation } from "react-router-dom";
// 
import Logo from "../../image/logoPay.svg";

const Header = () => {
	// const value = true;
	// место
	return (
		<header className="header" >
			<dev className="header__logo">
				<img className="header__image" src={Logo} alt="Лого" />
			</dev>
			<h1 className='header__title'>Пополнение баланса телефона </h1>
		</header>
	);
};
export default Header;
