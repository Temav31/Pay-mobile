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
import SuccessPopup from '../SuccessPopup/SuccessPopup';

// api
import MainApi from "../../utils/MainApi"

function App() {
	// открытие формы
	const [payPopupOpen, setPayPopupOpen] = useState(false);
	const [answerPopupOpen, setAnswerPopupOpen] = useState(false);
	const [result, setResult] = useState(false);
	const [operator, setOperator] = useState("");
	const [loading, setLoading] = useState(false);


	function handleOpen(name) {
		console.log(name)
		setOperator(name)
		setPayPopupOpen(true);
	}
	function handleClose() {
		setPayPopupOpen(false);
	}
	function handleCloseSuccess() {
		setAnswerPopupOpen(false);
	}

	// отправка на оплату
	function handleSubmit(data) {
		// setLoading(true);
		MainApi.pay(data)
			.then(() => {
				console.log("Оплата прошла")
				setPayPopupOpen(false);
			})
			.catch((err) => {
				console.log("Оплата не прошла")
				setPayPopupOpen(false);
				if (Math.random() < 0.5) {
					setResult(true);
				} else {
					setResult(false);
				}
				setAnswerPopupOpen(true);
			})
			// setLoading(false);
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
				name={operator}
				preloader={loading}
			/>
			<SuccessPopup
				isOpen={answerPopupOpen}
				onClose={handleCloseSuccess}
				value={result}
			/>
		</div>
	);
}

export default App;
