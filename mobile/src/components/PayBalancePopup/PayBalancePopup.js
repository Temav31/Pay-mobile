import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
// стили
import "./PayBalancePopup.css";
// import Exite from "../../images/Group1.svg";
import Exite from "../../image/Group1.svg"
// import mask from "../../utils/maska-nomera"


// Функциональный компонент
function PayBalancePopup({ isOpen, onClose, onSubmit }) {
	const regularPhone = /^\+?[+7,8][0-9]{7,11}$/;
	const regularNumber = /^([1-9][0-9]{0,2}|1000)$/;
	// данные
	const [number, setNumber] = useState("");
	const [phone, setPhone] = useState("");
	// ошибки
	const [errNum, setErrNum] = useState("");
	const [errPhone, setErrPhone] = useState("");

	// изменение пароля
	function handleChangeNumber(event) {
		setErrNum("");
		const target = event.target;
		const passwValue = target.value;
		console.log(target.validationMessage)
		setNumber(passwValue);
		console.log(regularPhone.test(passwValue))
		if (target.validity.valid) {
			if (!regularNumber.test(passwValue)) {
				console.log("hu")
				// setEmailValidation(false);
				setErrNum("Неправильно указана сумма пополнения. Укажите сумму от 1 до 1000");
			}
			// setErrNum(target.validationMessage);
			// setPasswValidation(true);
		} else {
			setErrNum(target.validationMessage);
		}
	};
	// изменения почты
	function handleChangePhone(event) {
		setErrPhone("");
		const target = event.target;
		const emailValue = target.value;
		console.log(emailValue)
		setPhone(emailValue);
		// setEmailValidation(true);
		if (target.validity.valid) {
			if (!regularPhone.test(emailValue)) {
				// setEmailValidation(false);
				setErrPhone("Неправильно набран номер");
			}
		} else {
			setErrPhone(target.validationMessage);
			// setEmailValidation(false);
		}
	};
	// отправка формы 
	function handleSubmit(event) {
		event.preventDefault();
		onSubmit({
			phone: phone,
			number: number,
		});
	}
	return (
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
					<h3 className="popup__title">Пополнение номера абонента, МТС</h3>
					<form className="popup__form" name="form-pay" onSubmit={handleSubmit}>
						<label className="popup__label">
							<span className="popup__span">
								Номер телефона
							</span>
							<InputMask
								mask="+7 (999) 999-99-99"
								className="popup__input"
								value={phone}
								onChange={handleChangePhone}
								placeholder="+7 (999) 999-99-99"
							/>
							{/* <input
								className="popup__input"
								type="number"
								name="phone"
								required
								id='pay-phone'
								placeholder="Запишите номер как на примере: 89997776644"
								minLength={11}
								// maxLength={11}
								value={phone}
								onChange={handleChangePhone}
							// disabled={block}
							/> */}
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
							className='popup__button'
							type='submit'
						>
							Пополнить</button>
					</form>
				</div>
			</div>

		</div >
	)
}
export default PayBalancePopup;
