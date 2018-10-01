import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TopNavbar />
					<ShoppingList />
				</div>
			</Provider>
		);
	}
}

export default App;
