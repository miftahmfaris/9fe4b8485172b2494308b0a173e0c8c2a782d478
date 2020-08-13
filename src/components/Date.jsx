import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const DateTitle = styled.p`
    font-size: 20px;
    font-weight: bold;
`;

export default function Date() {
    const date = useSelector((state) => state.calendar);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return (
        <div>
            <DateTitle>
                {date.toLocaleDateString("in-ID", options).replace(",", ".")}
            </DateTitle>
        </div>
    );
}
