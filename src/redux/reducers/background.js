import { LUNCH_BACKGROUND, DINNER_BACKGROUND } from "../actions";

const initialState = {
    lunch: true,
    dinner: false,
};

export default (state = initialState, actions) => {
    switch (actions.type) {
        case LUNCH_BACKGROUND:
            return { lunch: true, dinner: false };
        case DINNER_BACKGROUND:
            return { lunch: false, dinner: true };

        default:
            return state;
    }
};
