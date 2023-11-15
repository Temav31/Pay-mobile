import { URL } from "./constant.js"

class MainApi {
	constructor(url) {
		this._url = url;
	}
	_getHeaders() {
		return {
			"Accept": "application/json",
			"Content-Type": "application/json"
		}
	}

	pay(body) {
		console.log(body);
		return fetch(`${this._url}/pay`, {
			method: "POST",
			credentials: 'include',
			headers: this._getHeaders(),
			body: JSON.stringify(body)
		})
			.then((res) => this._checkResult(res));
	};
	
	// проверка ошибок
	_checkResult(res) {
		if (res.ok) {
			return res.json();
		}
		return Promise.reject(`Ошибка: ${res.status}`);
	};
}
const payment = new MainApi(URL);
export default payment;
