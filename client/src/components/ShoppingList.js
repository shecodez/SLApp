import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class ShoppingList extends React.Component {
	// state = {};

	componentDidMount() {
		this.props.getItems();
	}

	render() {
		const { items } = this.props.items;
		return (
			<ListGroup>
				<TransitionGroup className="shopping-list">
					{items.map(({ _id, name }) => (
						<CSSTransition
							key={_id}
							timeout={500}
							classNames="fade"
						>
							<ListGroupItem>
								<Button
									className="remove-btn"
									color="danger"
									size="sm"
									onClick={() => this.props.deleteItem(_id)}
								>
									&times;
								</Button>
								{name}
							</ListGroupItem>
						</CSSTransition>
					))}
				</TransitionGroup>
			</ListGroup>
		);
	}
}

ShoppingList.propTypes = {
	getItems: PropTypes.func.isRequired,
	items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	items: state.items
});

export default connect(
	mapStateToProps,
	{ getItems, deleteItem }
)(ShoppingList);
