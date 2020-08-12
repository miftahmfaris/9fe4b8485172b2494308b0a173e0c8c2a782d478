import React from "react";
import styled from "styled-components";

import { Address } from "./components";

const Layout = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+SC&display=swap");

    width: 317px;

    font-family: "Noto Sans SC", sans-serif;
`;

function App() {
    return (
        <Layout>
            <Address />
        </Layout>
    );
}

export default App;
