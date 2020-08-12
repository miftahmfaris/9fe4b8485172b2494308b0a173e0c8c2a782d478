import React from "react";
import styled from "styled-components";
import BackIcon from "@material-ui/icons/KeyboardBackspace";
import ExpandIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const FlexAddress = styled.div`
    display: flex;
`;

const AddressDetail = styled.div`
    & p {
        margin: 0 0 4px 0;
        font-size: 8px;
    }

    & span {
        font-size: 16px;
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

export default function Address() {
    const classes = useStyles();

    return (
        <FlexAddress>
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
        </FlexAddress>
    );
}
