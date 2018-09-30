import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import ShoppingList from "./components/ShoppingList";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopNavbar />
				<ShoppingList />
			</div>
		);
	}
}

export default App;
