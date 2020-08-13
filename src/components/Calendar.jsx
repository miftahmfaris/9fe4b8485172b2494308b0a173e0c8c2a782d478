import React from "react";
import DatePicker from "react-horizontal-datepicker";
import styled from "styled-components";
import { setCalendar } from "../redux/actions";
import { useDispatch } from "react-redux";

const CalendarView = styled.div`
    font-family: "Noto Sans SC", sans-serif;
    & button {
        display: none;
    }

    & span {
        display: none;
    }
`;

export default function Calendar() {
    const dispatch = useDispatch();

    const selectedDay = (val) => {
        dispatch(setCalendar(val));
    };

    return (
        <CalendarView>
            <DatePicker
                getSelectedDay={selectedDay}
                endDate={14}
                selectDate={new Date()}
                labelFormat={"MMMM"}
                color={"#424749"}
            />
            <hr />
        </CalendarView>
    );
}
