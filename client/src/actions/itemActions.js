import axios from "axios";
import { ITEMS_LOADING, GET_ITEMS, ADD_ITEM, DELETE_ITEM } from "./types";

export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	};
};

export const getItems = () => dispatch => {
	dispatch(setItemsLoading());
	axios.get("/api/items").then(res =>
		dispatch({
			type: GET_ITEMS,
			payload: res.data
		})
	);
};

export const addItem = item => dispatch => {
	axios.post("/api/items", item).then(res =>
		dispatch({
			type: ADD_ITEM,
			payload: res.data
		})
	);
};

export const deleteItem = id => dispatch => {
	axios.delete(`/api/items/${id}`).then(res =>
		dispatch({
			type: DELETE_ITEM,
			payload: id
		})
	);
};

/* export function getItems() {
	return function action(dispatch) {
		dispatch(setItemsLoading());

		const req = axios({
			method: "GET",
			url: "/api/items",
			headers: []
		});

		return req.then(
            res => dispatch(fetchItemsSuccess(res)),
            err => dispatch(fetchItemsFailure(err))
        ) 
	};
}

 export function fetchItemsSuccess(items) {
	return {
		type: FETCH_ITEMS_SUCCESS,
		payload: items
	};
}

export function fetchItemsFailure(error) {
	return {
		type: FETCH_ITEMS_FAILURE,
		payload: error
	};
} */
