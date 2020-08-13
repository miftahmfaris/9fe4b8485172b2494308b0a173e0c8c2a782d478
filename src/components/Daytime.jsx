import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { lunchBackground, dinnerBackground } from "../redux/actions";

const FlexDisplay = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Wrapper = styled(FlexDisplay)`
    justify-content: space-around;
    margin: 16px 16px;
`;

const CenterWrapper = styled(FlexDisplay)`
    justify-content: center;
    align-items: center;
    color: ${(props) => props.fontColor || "#f1f1f2"};
    background: ${(props) => props.backgroundColor || "#424749"};
    padding: 16px;
    box-sizing: border-box;
    height: 20px;
    width: 100%;
    border: solid 2px ${(props) => props.borderColor || "#424749"};
`;

const LunchWrapper = styled(CenterWrapper)`
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
`;

const DinnerWrapper = styled(CenterWrapper)`
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
`;

export default function Daytime() {
    const dispatch = useDispatch();
    const background = useSelector((state) => state.background);

    return (
        <Wrapper>
            <LunchWrapper
                backgroundColor={!background.lunch && "transparent"}
                borderColor={!background.lunch && "#f1f1f2"}
                fontColor={!background.lunch && "#e2e4e4"}
                onClick={() => dispatch(lunchBackground())}
            >
                <span>Lunch</span>
            </LunchWrapper>
            <DinnerWrapper
                backgroundColor={!background.dinner && "transparent"}
                borderColor={!background.dinner && "#f1f1f2"}
                fontColor={!background.dinner && "#e2e4e4"}
                onClick={() => dispatch(dinnerBackground())}
            >
                <span>Dinner</span>
            </DinnerWrapper>
        </Wrapper>
    );
}
