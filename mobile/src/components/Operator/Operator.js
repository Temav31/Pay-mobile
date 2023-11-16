// импорт стилей
import "./Operator.css";
import React from "react";
// иконки
import PayLogo from "../../image/Pay.svg";
import operatorList from "../../utils/constant";

import OperatorItem from "../OperatorItem/OperatorItem";

const Operator = ({ onOpen }) => {

	return (
		<header className="operator" >
			<div className="operator__list">
				<div className='operator__list-title'>
					<h2 className="operator__title">Выберите оператора</h2>
					<ul className="operator__container">
						{
							operatorList.map((item) => (
								<OperatorItem onClick={onOpen} item={item} />
							))
						}
					</ul>
				</div>
				<img className='operator__logo-pay' src={PayLogo} alt='Иконка с телефоном' />
			</div>
		</header>
	);
};
export default Operator;
