import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
// стили
import "./PayBalancePopup.css";
import Exite from "../../image/Group1.svg"
// import Preloader from "../Preloader/Preloader"

import {regularNumber, regularPhone} from "../../utils/constant"

// Функциональный компонент
function PayBalancePopup({ isOpen, onClose, onSubmit, name, preloader, block }) {
	// данные
	const [number, setNumber] = useState("");
	const [phone, setPhone] = useState("");
	// ошибки
	const [errNum, setErrNum] = useState("");
	const [errPhone, setErrPhone] = useState("");
	// валидация
	const [valNumber, setValNumber] = useState(false);
	const [valPhone, setValPhone] = useState(false);
	const [valForm, setValForm] = useState(false);

	// изменение пароля
	function handleChangeNumber(event) {
		setErrNum("");
		const target = event.target;
		const numberValue = target.value;
		setNumber(numberValue);
		setValNumber(true);
		if (target.validity.valid) {
			if (!regularNumber.test(numberValue)) {
				setValNumber(false);
				setErrNum("Неправильно указана сумма пополнения. Укажите сумму от 1 до 1000");
			}
		} else {
			setErrNum(target.validationMessage);
			setValNumber(false);
		}
	};
	// изменения почты
	function handleChangePhone(event) {
		setErrPhone("");
		const target = event.target;
		const phoneValue = target.value;
		setPhone(phoneValue);
		setValPhone(true);
		if (target.validity.valid) {
			if (!regularPhone.test(phoneValue)) {
				setValPhone(false);
				setErrPhone("Неправильно набран номер");
			}
		} else {
			setErrPhone(target.validationMessage);
			setValPhone(false);
		}
	};
	// отправка формы 
	function handleSubmit(event) {
		event.preventDefault();
		onSubmit({
			operator: name,
			phone: phone,
			number: number,
		});
		setPhone("");
		setNumber("");
	}

	useEffect(() => {
		if (number && phone &&
			valNumber && valPhone) {
			setValForm(true);
		} else {
			setValForm(false);
		}
	}, [number, phone, valNumber, valPhone]);

	return (
		<>
			{/* {preloader ? (
				<Preloader />
			) : ( */}
				<div
					// className="popup__on"
					className={`${isOpen ? "popup__on" : "popup__off"}`}
				>
					<div className="popup__box">
						<div className="popup__block">
							<button className="popup__button-exite"
								onClick={onClose}
								type="button">
								<img src={Exite} alt="Выход" className='popup__image' />
							</button>
							<h3 className="popup__title">{`Пополнение номера абонента, ${name}`}</h3>
							<form className="popup__form" name="form-pay" onSubmit={handleSubmit}>
								<label className="popup__label">
									<span className="popup__span">
										Номер телефона
									</span>
									<InputMask
										mask="+7(999)999-99-99"
										className="popup__input"
										value={phone}
										onChange={handleChangePhone}
										placeholder="+7(999)999-99-99"
									/>
									<span className="popup__error">
										{errPhone}
									</span>
								</label>
								<label className="popup__label">
									<span className="popup__span">
										Сумма пополнения
									</span>
									<input
										className="popup__input"
										type="number"
										id='pay-number'
										name="number"
										required
										value={number}
										placeholder="от 1 до 1000"
										onChange={handleChangeNumber}
									// disabled={block}
									/>
									<span className="popup__error">
										{errNum}
									</span>
								</label>
								<button
									className={`popup__button
									 ${!valForm ? "popup__button_off" : ""}
									 ${block ? "popup__button_off" : ""}
									 `}
									type='submit'
								>
									Пополнить</button>
							</form>
						</div>
					</div>
				</div>
		</>
	)
}
export default PayBalancePopup;
