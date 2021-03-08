import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ColorCollection } from '../../utils/ColorCollection';
import { FontWeight } from '../../utils/FontWeight';

const NavWrapper = styled.div`
    background-color: ${ColorCollection.CRIMSON_RED};
    height: 50px;
    display: flex;
    align-items: center;
    color: white;
`;
const NavToMain = styled(Link)`
    font-size: 30px;
    font-weight: ${FontWeight.BOLD};
    font-style: italic;
    padding: 0px 10px 0px 10px;
    color: inherit;
    text-decoration: none;
    &:hover {
        color:${ColorCollection.CRIMSON_RED};
    }
`;
const NavItems = styled(Link)`
    font-size: 15px;
    align-content: center;
    font-weight: ${FontWeight.NORMAL};
    padding: 0px 3px 0px 3px;
    float: right;
    color: inherit;
    text-decoration: none;
    &:hover {
        color:${ColorCollection.CRIMSON_RED};
    }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <NavToMain to="/">MMA FIGHTER FINDER</NavToMain>
            <NavItems to="/about">ABOUT</NavItems>
        </NavWrapper>
    );
};

export default Nav;