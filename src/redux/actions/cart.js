const ADD_CART = "ADD_CART";
const CHECKOUT_CART = "CHECKOUT_CART";

const addCart = () => {
    return {
        type: ADD_CART,
        payload: true,
    };
};

const checkOut = () => {
    return {
        type: CHECKOUT_CART,
        payload: false,
    };
};

export { ADD_CART, CHECKOUT_CART, addCart, checkOut };
