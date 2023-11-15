import React from "react";
// импорт стилей
import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Operator from "../Operator/Operator";


const Main = () => {
	return (
		<>
			<Header />
			{/* Основной бллок */}
			<main>
				<Operator />
			</main>
			{/* Конец основного блока */}
			<Footer />
		</>
	);
};
export default Main;
