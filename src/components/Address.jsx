import React from "react";
import styled from "styled-components";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Daytime from "./Daytime";
import { useSelector } from "react-redux";

const FlexAddress = styled.div`
    display: flex;
`;

const Wrapper = styled(FlexAddress)`
    margin-top: 16px;
`;

const AddressDetail = styled.div`
    & p {
        margin: 0 0 4px 0;
        font-size: 8px;
        color: #6e7679;
    }

    & span {
        font-size: 20px;
    }
`;

const useStyles = makeStyles((theme) => ({
    backIcon: {
        fontSize: "24px",
        color: "#424749",
    },
    expandIcon: {
        fontSize: "24px",
        color: "#f9423a",
    },
}));

const FlexCenter = styled(FlexAddress)`
    align-items: center;
    margin-right: 16px;
`;

const Container = styled.div`
    position: fixed;
    background: white;
    height: 100px;
    top: 0px;
    width: 100%;
    left: 0px;
`;

export default function Address() {
    const classes = useStyles();
    const position = useSelector((state) => state.position);

    return (
        <Container>
            <Wrapper>
                <FlexCenter>
                    <BackIcon className={classes.backIcon} />
                </FlexCenter>
                <AddressDetail>
                    <p>ALAMAT PENGANTARAN</p>
                    <FlexAddress>
                        <span>Tokopedia Tower</span>
                        <ExpandIcon className={classes.expandIcon} />
                    </FlexAddress>
                </AddressDetail>
            </Wrapper>
            {position < 200 && <Daytime />}
        </Container>
    );
}
