import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TopNavbar from "./components/TopNavbar";

class App extends Component {
	render() {
		return (
			<div className="App">
				<TopNavbar />
				<h1>Hello</h1>
			</div>
		);
	}
}

export default App;
