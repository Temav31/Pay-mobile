import './App.css';
import { useEffect, useState } from 'react';
import {
	Route,
	Routes,
	useNavigate,
	Navigate,
	useLocation
} from 'react-router-dom';
// изображение
import logo from '../../image/logo.svg';
// компоненты
import Main from '../Main/Main';
import PayBalancePopup from '../PayBalancePopup/PayBalancePopup';

// api
import MainApi from "../../utils/MainApi"

function App() {
	// открытие формы
	const [payPopupOpen, setPayPopupOpen] = useState(false);
	
	function handleOpen() {
		setPayPopupOpen(true);
	}
	function handleClose() {
		setPayPopupOpen(false);
	}
	// отправка на оплату
	function handleSubmit(data) {
		console.log(data)
		MainApi.pay(data)
		.then(() => {
			console.log("Оплата прошла")
			setPayPopupOpen(false);
		})
		.catch((err) => {
			console.log("Оплата не прошла")
			setPayPopupOpen(false);
		})
	}
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Main
					onOpen={handleOpen}
					/>}
				/>
			</Routes>
			<PayBalancePopup
					isOpen={payPopupOpen}
					onClose={handleClose}
					onSubmit={handleSubmit}
				/>
		</div>
	);
}

export default App;
