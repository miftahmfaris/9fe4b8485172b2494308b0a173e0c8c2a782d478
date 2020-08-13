import { SET_CALENDAR } from "../actions";

const initialState = new Date();

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_CALENDAR:
            return actions.payload;

        default:
            return state;
    }
};
