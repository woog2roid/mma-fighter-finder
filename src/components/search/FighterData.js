import React from 'react';
import styled from 'styled-components';
import { FontWeight } from '../../styles/FontWeight';
import FightEvent from './FightEvent';

const Wrapper = styled.div`
    text-align: center;
`;
const Main = styled.div`
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        font-size: 25px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 35px;
    }
    @media all and (min-width:1081px) {
        font-size: 40px;
    }
`;
const Profile = styled.table`
    margin: 0 auto;
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 12px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 18px;
    }
    @media all and (min-width:1081px) {
        font-size: 18px;
    }
`;
const TR = styled.tr`
`;
const TD = styled.td`
 & + & {
     padding-left: 15px;
 }
`;
const RecordMain = styled.div`
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        margin-top: 5px;
        font-size: 20px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        margin-top: 10px;
        font-size: 30px;
    }
    @media all and (min-width:1081px) {
        margin-top: 10px;
        font-size: 35px;
    }
`;
const RecordComain = styled.div`
    font-weight: ${FontWeight.NORMAL};
    @media all and (max-width:767px) {
        font-size: 14px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 18px;
    }
    @media all and (min-width:1081px) {
        font-size: 20px;
    }
`;
const RecordDetail = styled.div`
    font-weight: ${FontWeight.LIGHTER};
    @media all and (max-width:767px) {
        font-size: 12px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 18px;
    }
    @media all and (min-width:1081px) {
        font-size: 18px;
    }
`;
const FightMain = styled.div`
    margin: 10px 0px 10px 0px;
    font-weight: ${FontWeight.BOLD};
    @media all and (max-width:767px) {
        font-size: 20px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 30px;
    }
    @media all and (min-width:1081px) {
        font-size: 35px;
    }
`;

const FighterData = ({ data }) => {
    const { name, nickname, age, nationality, height, weight_class, association, birthday, hometown, location,
        wins, losses, fights, no_contests } = data;
    
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

            <RecordMain>{wins.total} - {losses.total} - {no_contests}</RecordMain>
            <RecordComain>WINS BY</RecordComain>
            <RecordDetail>{wins.knockouts} KO, {wins.submissions} submissions, {wins.decisions} decisions, {wins.others} ohters</RecordDetail>
            <RecordComain>LOSSES BY</RecordComain>
            <RecordDetail>{losses.knockouts} KO, {losses.submissions} submissions, {losses.decisions} decisions, {losses.others} ohters</RecordDetail>
            
            <FightMain>Fights</FightMain>
            {fights.map(( fight, index ) => (
                <FightEvent key={index} fight={fight}/>
            ))}
        </Wrapper>
    );
}

export default FighterData;