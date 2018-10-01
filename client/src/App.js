import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import { Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TopNavbar from "./components/TopNavbar";
import ShoppingList from "./components/ShoppingList";
import ItemModal from "./components/ItemModal";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<TopNavbar />
					<Container>
						<ItemModal />
						<ShoppingList />
					</Container>
				</div>
			</Provider>
		);
	}
}

export default App;
