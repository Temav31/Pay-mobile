import Megafon from "../image/megafon.svg";
import Mts from "../image/mts.svg";
import Belain from "../image/beelain.svg";
export const URL = "https://dsjkfnfdsf.djkfgg.ru";
const regularNumber = /^([1-9][0-9]{0,2}|1000)$/;
const regularPhone = /^\+7\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
export {
	regularNumber,
	regularPhone
}
// хранение операторов
const operatorList = [
	{
		name: "Мтс",
		src: Mts
	},
	{
		name: "Мегафон",
		src: Megafon
	},
	{
		name: "Билайн",
		src: Belain
	}
];
export default operatorList;
