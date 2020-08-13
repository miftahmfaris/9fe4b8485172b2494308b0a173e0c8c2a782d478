const LUNCH_BACKGROUND = "LUNCH_BACKGROUND";
const DINNER_BACKGROUND = "DINNER_BACKGROUND";

const dinnerBackground = () => {
    return {
        type: DINNER_BACKGROUND,
    };
};

const lunchBackground = () => {
    return {
        type: LUNCH_BACKGROUND,
    };
};

export {
    LUNCH_BACKGROUND,
    DINNER_BACKGROUND,
    lunchBackground,
    dinnerBackground,
};
