import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';
import FightEvents from './FightEvents';

const Wrapper = styled.div`
    text-align: center;
    align-content: center;
`;
const Main = styled.div`
    font-size: 40px;
    font-weight: ${FontWeight.BOLD};
`;
const Profile = styled.table`
    margin: 0 auto;
    font-size: 18px;
    font-weight: ${FontWeight.LIGHTER};
`;
const TR = styled.tr`
`;
const TD = styled.td`
 & + & {
     padding-left: 15px;
 }
`;
const RecordMain = styled.div`
    margin-top: 10px;
    font-size: 35px;
    font-weight: ${FontWeight.BOLD};
`;
const RecordComain = styled.div`
    font-size: 20px;
    font-weight: ${FontWeight.NORMAL};
`;
const RecordDetail = styled.div`
    font-size: 18px;
    font-weight: ${FontWeight.LIGHTER};
`;
const FightMain = styled.div`
    margin: 10px 0px 10px 0px;
    font-size: 35px;
    font-weight: ${FontWeight.BOLD};
`;

const FighterCard = ({ data }) => {
    const { name, nickname, age, nationality, height, weight_class, association, birthday, hometown, location,
        wins, losses, fights } = data;
    
    return (
        <Wrapper>
            <Main>{ name }</Main>
            <Profile>
	            <TR><TD>Ring Name</TD><TD>{nickname || "?"}</TD></TR>
                <TR><TD>Age</TD><TD>{age || "?"}</TD></TR>
                <TR><TD>Nationality</TD><TD>{nationality || "?"}</TD></TR>
                <TR><TD>Height</TD><TD>{height || "?"}</TD></TR>
                <TR><TD>Wieght Class</TD><TD>{weight_class || "?"}</TD></TR>
                <TR><TD>Association</TD><TD>{association || "?"}</TD></TR>
                <TR><TD>Birthday</TD><TD>{birthday || "?"}</TD></TR>
                <TR><TD>Hometown</TD><TD>{hometown || "?"}</TD></TR>
                <TR><TD>Location</TD><TD>{location || "?"}</TD></TR>
            </Profile>

            <RecordMain>{wins.total} - {losses.total}</RecordMain>
            <RecordComain>WINS BY</RecordComain>
            <RecordDetail>{wins.knockouts} KO, {wins.submissions} submissions, {wins.decisions} decisions, {wins.others} ohters</RecordDetail>
            <RecordComain>LOSSES BY</RecordComain>
            <RecordDetail>{losses.knockouts} KO, {losses.submissions} submissions, {losses.decisions} decisions, {losses.others} ohters</RecordDetail>
            
            <FightMain>Fights</FightMain>
            {fights.map(( fight, index ) => (
                <FightEvents key={index} fight={fight}/>
            ))}
        </Wrapper>
    );
}

export default FighterCard;