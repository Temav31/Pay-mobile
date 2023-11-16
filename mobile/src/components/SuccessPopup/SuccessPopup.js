import React from "react";
import popupImageClose from '../../image/close.svg';
import successImage from '../../image/Successfully.png';
import failedImage from '../../image/Failed.png';
// стили
import '../SuccessPopup/SuccessPopup.css';
// компонент для папапа с картинкой
function SuccessPopup(props) {
	const { isOpen, onClose, value } = props;
	//  const value = true;
	let image;
    let textImage;
    if (!value) { 
        image= successImage;
        textImage= 'Операция прошла успешно';
    }
    else {
		image= failedImage;
		textImage= "Операция не прошла"
    }
	return (
		<div className={`popup popup_type_info` + (isOpen && " popup_open")}>
			<div className="popup__elements">
				<button type="reset" className=" popup__close">
					<img
						src={popupImageClose}
						alt="Значок закрытия окна"
						className="popup__button-close"
						onClick={onClose}
					/>
				</button>
				<div className="popup__container">
					<img className="popup__info-image" src={image} alt="Результат запроса" />
					<p className="text-group popup__info-text">{textImage}</p>
				</div>
			</div>
		</div>
	)
}
export default SuccessPopup;
