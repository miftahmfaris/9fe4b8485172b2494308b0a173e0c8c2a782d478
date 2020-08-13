import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import address from "../address";

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: "'Noto Sans SC', sans-serif",
    },
    textField: {
        width: "100%",
    },
    locationIcon: {
        color: "#f9423a",
    },
    locationIconGray: {
        color: "#6e7679",
        background: "#e2e4e4",
        padding: "4px",
        borderRadius: "50%",
        marginRight: "8px",
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return (
        <Slide
            direction="up"
            ref={ref}
            {...props}
            style={{
                marginTop: "100px",
            }}
        />
    );
});

const FlexDisplay = styled.div`
    display: flex;
`;

const Icon = styled(FlexDisplay)`
    justify-content: flex-end;
`;

const Container = styled.div`
    padding: 16px;
    box-sizing: border-box;

    & p:nth-child(2) {
        font-size: 20px;
    }
`;

const SearchResult = styled(FlexDisplay)`
    align-items: center;
    height: 50px;
    margin: 26px 0;
`;

const Address = styled.div`
    width: 100%;
    & p {
        margin: 0;
    }

    & p:nth-child(1) {
        font-size: 16px;
        color: #424749;
    }

    & p:nth-child(2) {
        font-size: 12px;
        color: #6e7679;
    }
`;

const Horizontal = styled.hr`
    border: solid 1px #f1f1f2;
`;

export default function Modal(props) {
    const classes = useStyles();
    const { onClose, selectedValue, open } = props;
    const [input, setInput] = useState("");
    const [search, setSearch] = useState(address);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    const handleKeyUp = (event) => {
        event.preventDefault();

        const filter = address.filter((item) => {
            return item.place.toLowerCase().includes(input.toLowerCase());
        });

        setSearch(filter);
    };

    return (
        <Dialog
            fullScreen
            onClose={handleClose}
            aria-labelledby="location-dialog"
            open={open}
            TransitionComponent={Transition}
        >
            <Container className={classes.root}>
                <Icon onClick={handleClose}>
                    <CloseIcon />
                </Icon>
                <p>Cek makanan yang tersedia di lokasi kamu!</p>
                <form onKeyUp={handleKeyUp}>
                    <TextField
                        className={classes.textField}
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LocationOnIcon
                                        className={classes.locationIcon}
                                    />
                                </InputAdornment>
                            ),
                        }}
                        value={input}
                        onChange={handleChange}
                    />
                </form>
                {input.length >= 3 &&
                    search.map((item) => {
                        return (
                            <SearchResult onClick={handleClose} key={item.id}>
                                <LocationOnIcon
                                    className={classes.locationIconGray}
                                />
                                <Address>
                                    <p>{item.place}</p>
                                    <p>{item.address.slice(0, 46) + "..."}</p>
                                    <Horizontal />
                                </Address>
                            </SearchResult>
                        );
                    })}
            </Container>
        </Dialog>
    );
}
