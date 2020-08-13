const SET_CALENDAR = "SET_CALENDAR";

const setCalendar = (value) => {
    return {
        type: SET_CALENDAR,
        payload: value,
    };
};

export { SET_CALENDAR, setCalendar };
