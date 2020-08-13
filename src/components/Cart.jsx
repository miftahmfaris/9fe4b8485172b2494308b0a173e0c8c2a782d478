import React from "react";
import styled from "styled-components";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { checkOut } from "../redux/actions";

const FixedDisplay = styled.div`
    position: fixed;
    bottom: 10px;
    left: 0px;
    right: 0px;
    background: #a23530;
    margin: 0 16px 16px 16px;
    border-radius: 10px;
    height: 75px;
`;

const UnderDisplay = styled.div`
    position: fixed;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
    bottom: 0px;
    width: 100%;
    height: 50px;
`;

const FlexDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 8px 16px 8px 16px;
    box-sizing: border-box;
`;

const CartPrice = styled.div`
    color: #f1f1f2;

    & p {
        margin: 0;
    }

    & p:nth-child(1) {
        font-size: 16px;
        font-weight: bold;
    }

    & p:nth-child(2) {
        font-size: 12px;
    }
`;

const useStyles = makeStyles((theme) => ({
    cartIcon: {
        fontSize: "24px",
        color: " #f1f1f2",
    },
    nextIcon: {
        fontSize: "24px",
        color: " #f1f1f2",
    },
}));

export default function Cart() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(checkOut());
    };

    return (
        <UnderDisplay>
            <FixedDisplay>
                <FlexDisplay>
                    <CartPrice>
                        <p>5 Items | Rp. 125,000</p>
                        <p>Termasuk Ongkos Kirim</p>
                    </CartPrice>
                    <div onClick={handleClick}>
                        <ShoppingCartIcon className={classes.cartIcon} />
                        <KeyboardArrowRightIcon className={classes.nextIcon} />
                    </div>
                </FlexDisplay>
            </FixedDisplay>
        </UnderDisplay>
    );
}
