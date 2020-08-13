const SET_POSITION = "SET_POSITION";

const setPosition = (position) => {
    return {
        type: SET_POSITION,
        payload: position,
    };
};

export { SET_POSITION, setPosition };
