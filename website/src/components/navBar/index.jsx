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

const BrandContainer = styled.div`

`;

const AccessibilityContainer = styled.div`

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

    &:hover {
        color: #e07a5f;
    }`

export function NavBar(props) {
    return (
        <NavBarContainer>
            <BrandContainer>
                <Brand src={BrandImg} />
            </BrandContainer>
            <AccessibilityContainer>
                <Button>Procrastinate</Button>
            </AccessibilityContainer>
        </NavBarContainer>
    );
}