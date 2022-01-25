import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { FontWeight } from '../../styles/FontWeight';
import { ColorCollection } from '../../styles/ColorCollection';

const Wrapper = styled.div`
    margin-bottom: 10px;
    background: ${props => props.result === "win" ? ColorCollection.GREEN : props.result === "loss" ? ColorCollection.RED : ColorCollection.GRAY};
    text-align: ${props => props.result === "win" ? "left" : "right"};
    padding: ${props => props.result === "win" ? "5px 0px 5px 10px" : "5px 10px 5px 0px" };
`;
const Main = styled.a`
    font-weight: ${FontWeight.NORMAL};
    text-decoration: none;
    color: white;
    @media all and (max-width:767px) {
        font-size: 15px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 20px;
    }
    @media all and (min-width:1081px) {
        font-size: 25px;
    }
`;
const Method = styled.div`
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 12px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 15px;
    }
    @media all and (min-width:1081px) {
        font-size: 18px;
    }
`;
const Referee = styled.div`
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 12px;
    }
    @media all and (min-width:1081px) {
        font-size: 15px;
    }
`;
const Date = styled.div`
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 8px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 10px;
    }
    @media all and (min-width:1081px) {
        font-size: 12px;
    }
`;
const FightEvent = ({ fight }) => {
	const history = useHistory();
    const { opponent, date, method, round, time, referee, result } = fight;
	
	const goToOpponent = (e) => {
		e.preventDefault();
    	history.push(`/mma-fighter-finder/search?fighter=${opponent}`);
	};
	
    return (
        <Wrapper result={result}>
            <Main onClick={goToOpponent}>vs {opponent}</Main>
            <Method>By {method} at {round}round {time}</Method>
            <Referee>referee : {referee}</Referee>
            <Date>{date}</Date>
        </Wrapper>
    );
}

export default FightEvent;