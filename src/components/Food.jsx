import React from "react";
import data from "../data";
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/actions";
import Date from "./Date";

const useStyles = makeStyles((theme) => ({
    starIcon: {
        fontSize: "16px",
        color: "#f9423a",
    },
    plusIcon: {
        fontSize: "17px",
    },
}));

const Card = styled.div`
    width: 100%;

    border-radius: 5%;
    box-shadow: 0px 8px 10px 0px rgba(10, 31, 68, 0.1);
    margin-bottom: 24px;
    box-sizing: border-box;
`;

const ContainerImage = styled.div`
    width: 100%;

    & img {
        border-top-left-radius: 5%;
        border-top-right-radius: 5%;
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
`;

const DisplayFlex = styled.div`
    display: flex;
`;

const Price = styled(DisplayFlex)`
    justify-content: space-between;
    align-items: center;

    padding: 8px 8px 8px 0;

    & p:nth-child(1) {
        font-size: 20px;
    }
`;

const FoodContainer = styled.div`
    border-radius: 10px;
    padding: 16px;
    box-sizing: border-box;
    margin-top: 190px;
`;

const CardDetail = styled.div`
    padding: 16px;
    box-sizing: border-box;

    & p {
        margin: 0;
    }

    & p:nth-child(2) {
        font-size: 20px;
    }

    & p:nth-child(3) {
        font-size: 12px;
        color: #6e7679;
    }

    & p:nth-child(3) span {
        font-size: 20px;
    }
`;

const Rating = styled(DisplayFlex)`
    & span {
        margin-right: 4px;
        font-size: 16px;
        color: #6e7679;
    }
`;

const AddButton = styled(DisplayFlex)`
    background: #f9423a;
    color: #f1f1f2;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 8px 16px 8px 16px;
    border-radius: 5px;
    width: 100px;

    & span {
        font-size: 14px;
    }
`;

export default function Food() {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addCart());
    };

    return (
        <FoodContainer>
            <Date />
            {data.map((item) => {
                return (
                    <Card key={item.id}>
                        <ContainerImage>
                            <img src={item.image} alt={item.title} />
                        </ContainerImage>
                        <CardDetail>
                            <Rating>
                                <span>4.5</span>
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarIcon className={classes.starIcon} />
                                <StarHalfIcon className={classes.starIcon} />
                            </Rating>
                            <p>{item.name}</p>
                            <p>
                                by {item.productBy} <span>.</span>{" "}
                                {item.location}
                            </p>
                            <Price>
                                <p>Rp. {item.price.toLocaleString()}</p>
                                <AddButton onClick={handleClick}>
                                    <span>ADD</span>
                                    <AddIcon className={classes.plusIcon} />
                                </AddButton>
                            </Price>
                        </CardDetail>
                    </Card>
                );
            })}
        </FoodContainer>
    );
}
