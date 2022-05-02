import axios from "axios";

import constants from "./constants";

const UserDispatch = {
	getUser: (payload) => async (dispatch) => {
		dispatch({
			type: constants.GET_USER_PENDING
		});
		let response = await axios({
			url: "https://api.github.com/users/Enobaks",
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			data: null
		});
		if (response.status === 200) {
			dispatch({
				type: constants.GET_USER_SUCCESS,
				payload: response.data,
				message: response.message
			});
		} else {
			dispatch({
				type: constants.GET_USER_FAILED,
				error: response.error
			})
		}
	}
}

export default UserDispatch;