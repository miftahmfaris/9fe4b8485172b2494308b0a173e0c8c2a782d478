import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { Address, Food, Cart } from "./components";
import { setPosition } from "./redux/actions";

const Layout = styled.div`
    font-family: "Noto Sans SC", sans-serif;
    color: #424749;
`;

function App() {
    const cartStatus = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const handleScroll = useCallback(() => {
        const currentPosition = window.pageYOffset;
        dispatch(setPosition(currentPosition));
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [handleScroll]);

    return (
        <Layout>
            <Address />
            <Food />
            {cartStatus === true && <Cart />}
        </Layout>
    );
}

export default App;
