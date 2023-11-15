import React from "react";
// импорт стилей
import "./Main.css";
// импорт блоков

// импорт базовых
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Operator from "../Operator/Operator";


const Main = ({onOpen}) => {
	return (
		<>
			<Header />
			{/* Основной бллок */}
			<main>
				<Operator onOpen={onOpen} />
			</main>
			{/* Конец основного блока */}
			<Footer />
		</>
	);
};
export default Main;
