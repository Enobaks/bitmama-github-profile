import constants from "./constants";

const userReducer = {
    getUser: (state = {
        isPending: false,
        user: null,
        error: ''
    }, action = {}) => {
        switch (action.type) {
            case constants.GET_USER_PENDING:
                return Object.assign({}, state, { user: null, isPending: true });

            case constants.GET_USER_SUCCESS:
                return Object.assign({}, state, { user: action.payload, isPending: false });

            case constants.GET_USER_FAILED:
                return Object.assign({}, state, { user: null, error: action.error, isPending: false });

            default:
                return state;

        }
    }
}

export default userReducer;