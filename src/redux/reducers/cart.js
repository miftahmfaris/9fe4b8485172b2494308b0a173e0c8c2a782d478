import { ADD_CART, CHECKOUT_CART } from "../actions";

const initialState = {};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case ADD_CART:
            return true;
        case CHECKOUT_CART:
            return false;

        default:
            return state;
    }
};
