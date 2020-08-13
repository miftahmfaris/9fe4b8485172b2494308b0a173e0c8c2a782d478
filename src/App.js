import React from "react";
import styled from "styled-components";

import { Address, Food, Cart } from "./components";

const Layout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap");

    font-family: "Noto Sans SC", sans-serif;
    color: #424749;
`;

function App() {
    return (
        <Layout>
            <Address />
            <Food />
            <Cart />
        </Layout>
    );
}

export default App;
