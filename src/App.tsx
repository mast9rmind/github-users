import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Router from "./router/Router";

function App() {
	return (
		<BrowserRouter>
			<Router />
			<ToastContainer />
		</BrowserRouter>
	);
}

export default App;
