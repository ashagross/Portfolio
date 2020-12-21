import React from 'react';
import styled from 'styled-components';



import BrandImg from '../../assets/logo/AGBrand.png';

const NavBarContainer = styled.div`
    width: 100%;
    height: 65px;
    padding: 1em 2em;
    display: flex;
    justify-content: space-between;
`;

const Brand = styled.img`
    height: 6em;
    width: 6em;
`;

const Button = styled.button`
    color: #f6efe9;
    background-color: transparent;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    transition: all 220ms ease-in-out;
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
        color: #e07a5f;
    }`

export function NavBar(props) {
    return (
        <NavBarContainer>
            <Brand src={BrandImg} />
            <Button>Need a break? (coming soon)</Button>
        </NavBarContainer>
    );
}