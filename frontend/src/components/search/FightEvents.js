import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../utils/FontWeight';
import { ColorCollection } from '../../utils/ColorCollection';

const Wrapper = styled.div`
    margin-bottom: 10px;
    background: ${props => props.result === "win" ? ColorCollection.GREEN : ColorCollection.RED};
    text-align: ${props => props.result === "win" ? "left" : "right"};
    padding: ${props => props.result === "win" ? "5px 0px 5px 10px" : "5px 10px 5px 0px" };
`;
const Main = styled.a`
    font-size: 25px;
    font-weight: ${FontWeight.NORMAL};
    text-decoration: none;
`;
const Method = styled.div`
    font-size: 18px;
    font-weight: ${FontWeight.LIGHTER};
`;
const Referee = styled.div`
    font-size: 15px;
    font-weight: ${FontWeight.LIGHTER};
`;
const Date = styled.div`
    font-size: 12px;
    font-weight: ${FontWeight.LIGHTER};
`;
const FightEvents = ({ fight }) => {
    const { opponent, date, method, round, time, referee, url, result } = fight;
    const URL = "https://www.sherdog.com/" + url;
    return (
        <Wrapper result={result}>
            <Main href={URL} target='_blank' rel="noreferrer">vs {opponent}</Main>
            <Method>By {method} at {round}round {time}</Method>
            <Referee>referee : {referee}</Referee>
            <Date>{date}</Date>
        </Wrapper>
    );
}

export default FightEvents;