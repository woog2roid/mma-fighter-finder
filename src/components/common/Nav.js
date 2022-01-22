import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const NavWrapper = styled.div`
    background-color: ${ColorCollection.CRIMSON_RED};
    display: flex;
    align-items: center;
    width: 100%;    
    @media all and (max-width:767px) {
        height: 50px;    
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        height: 50px;        
    }
    @media all and (min-width:1081px) {
        height: 50px;
    }
`;

const NavMain = styled(Link)`
    font-weight: ${FontWeight.BOLD};
    font-style: italic;
    padding: 0px 10px 0px 10px;
    color: inherit;
    text-decoration: none;
    @media all and (max-width:767px) {
        font-size: 20px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 25px;        
    }
    @media all and (min-width:1081px) {
        font-size: 30px;        
    }
    &:hover {
        color:${ColorCollection.CRIMSON_RED};
    }
`;
const NavItems = styled(Link)`
    align-content: center;
    font-weight: ${FontWeight.NORMAL};
    padding: 0px 3px 0px 3px;
    color: inherit;
    text-decoration: none;
    @media all and (max-width:767px) {
        font-size: 10px;
    }
    @media all and (min-width:768px) and (max-width:1080px) {
        font-size: 13px;        
    }
    @media all and (min-width:1081px) {
        font-size: 15px;
    }
    &:hover {
        color:${ColorCollection.CRIMSON_RED};
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <NavMain to="/mma-fighter-finder">MMA FIGHTER FINDER</NavMain>
            <NavItems to="/mma-fighter-finder/about">ABOUT</NavItems>
        </NavWrapper>
    );
};

export default Nav;