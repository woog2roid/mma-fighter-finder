import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const Wrapper = styled.div`
    background-color: ${ColorCollection.DARK_GRAY};
    text-align: center;
    @media all and (max-width:767px) {
        --min-height: 250px;
        padding: 5px;
        --padding: 5px;
        margin-top: 30vh;
        margin-bottom: 30vh;
        margin-left: 10px;
        margin-right: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        --min-height: 300px;
        padding: 10px;
        --padding: 10px;
        margin-top: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-bottom: calc((100vh - var(--min-height) -75px - (2 * var(--padding))) / 2);
        margin-left: 20px;
        margin-right: 20px;
    }
    @media all and (min-width:1081px) {
        height: 500px;
        --height: 500px;
        padding: 20px;
        --padding: 20px;
        margin-top: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
        margin-bottom: calc((100vh - var(--height) - 80px - (2 * var(--padding))) / 2);
        margin-left: 100px;
        margin-right: 100px;
    }
`;
const MainDescription = styled.div`
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        padding-top: 10px;
        font-size: 15px;
        padding-bottom: 8px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        padding-top: 20px;
        font-size: 25px;
        padding-bottom: 15px;
    }
    @media all and (min-width:1081px) {
        padding-top: 40px;
        font-size: 30px;
        padding-bottom: 25px;
    }
`;
const Circle = styled.div`
    background-color:${ColorCollection.CRIMSON_RED};
    margin:0 auto;
    opacity: 0.8;
    @media all and (max-width:767px) {
        width: 180px;
        height: 180px;
        border-radius: 180px;
        margin-bottom: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        width: 250px;
        height: 250px;
        border-radius: 250px;
        margin-bottom: 15px;    
    }
    @media all and (min-width:1081px) {
        width:300px;
        height:300px;
        border-radius:150px;
        margin-bottom: 20px;
    }
`;
const Text = styled.div`
    font-weight: ${FontWeight.NORMAL};
    text-decoration: none;
    @media all and (max-width:767px) {
        padding-top: 60px;
        font-size: 13px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        padding-top: 80px;
        font-size: 18px;
    }
    @media all and (min-width:1081px) {
        padding-top: 95px;
        font-size: 20px;
    }
`;
const Input = styled.input`
    opacity: 0.9;
    border : 2px solid ${ColorCollection.CRIMSON_RED};
    border-radius : 5px;
    &:focus {
        outline: none;
    }
    @media all and (max-width:767px) {
        height: 25px;
        width: 150px;
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        height: 40px;
        width: 200px;
        font-size: 12px;
    }
    @media all and (min-width:1081px) {
        height: 50px;
        width: 240px;
        font-size: 15px;
    }
`;
const Keyword = styled.div`
    font-weight: ${FontWeight.LIGHTER};
    font-style: italic;
    @media all and (max-width:767px) {
        font-size: 8px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 12px;
    }
    @media all and (min-width:1081px) {
        font-size: 15px;
    }
`;

const MainContents = () => {
    const history = useHistory();
    const onSubmit = useCallback(
        e => {
            e.preventDefault();
            history.push(`/mma-fighter-finder/search?fighter=${e.target.input.value}`);
        }, []
    );

    return (
        <Wrapper>
            <MainDescription>GET MMA FIGHTERS' INFO AND WIN THE BET</MainDescription>
            <Circle>
                <Text>SEARCH FIGHTERS</Text>
                <form onSubmit={onSubmit}><Input name="input" autoComplete="off"/></form>
            </Circle>
            <Keyword>"I recommend searching by full name or nick name."</Keyword>
            <Keyword>
                Because the data is parsed and imported from sherdog, you can find it even if you type just a keyword, but accuracy is not guaranteed.
            </Keyword>
        </Wrapper>
    );
};

export default MainContents;
