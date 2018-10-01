import React from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
import {
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Label,
	Input
} from "reactstrap";
import uuid from "uuid";

class ItemModal extends React.Component {
	state = {
		name: "",
		isOpen: false
	};

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	toggleModal = () => {
		this.setState({ isOpen: !this.state.isOpen });
	};

	submit = e => {
		e.preventDefault();

		const newItem = {
			id: uuid(),
			name: this.state.name.trim()
		};

		this.props.addItem(newItem);
		this.toggleModal();
		this.setState({ name: "" });
	};

	render() {
		return (
			<div>
				<Button
					color="dark"
					style={{ marginBottom: "2rem" }}
					onClick={this.toggleModal}
				>
					Add Item
				</Button>

				<Modal isOpen={this.state.isOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>
						Add to List
					</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.submit}>
							<FormGroup>
								<Label for="item">Item</Label>
								<Input
									type="text"
									name="name"
									id="item"
									value={this.state.name}
									placeholder="Add an Item"
									onChange={this.onChange}
								/>
							</FormGroup>
							<FormGroup>
								<Button color="dark" block>
									Add Item
								</Button>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default connect(
	null,
	{ addItem }
)(ItemModal);
