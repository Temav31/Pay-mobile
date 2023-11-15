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

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Main/>}
				/>
			</Routes>
		</div>
	);
}

export default App;
