import { SET_POSITION } from "../actions";

const initialState = 0;

export default (state = initialState, actions) => {
    switch (actions.type) {
        case SET_POSITION:
            return actions.payload;

        default:
            return state;
    }
};
