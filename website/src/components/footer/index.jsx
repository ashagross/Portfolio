
import React from 'react';
import { Element } from 'react-scroll';
import { Marginer } from '../marginer/index';
import styled from 'styled-components';



import BrandImg from '../../assets/logo/AGBrand.png';

const FooterContainer = styled(Element)`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8em;
    background-color: #1f1f1f;
`;

const ContactContainer= styled.div`
    margin-top: 8em;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
`;

const Contact = styled.p`
    color: #7a7a7a;
    font-size: 19px;
    font-family: 'Lato', sans-serif;
    line-height: 1.4;
`;

const BrandIcon= styled.img`
    width: 8em;
    height: 8emx;
`;


const AccessibilityContainer = styled.div`
    width: 80%;
    display: flex;
    border-top: 1px solid #e07a5f;
    padding-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
    color: #f6efe9;
`;

const RightsReserved = styled.div`
    font-family: 'Lato', sans-serif;
    bottom: 8px;
    left: 50%;
    color: #f6efe9;
    font-size: 12px;
    padding-top: 1em;
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="2em" />
            <BrandIcon src={BrandImg} />
            <ContactContainer>
                <Contact>Lets Chat!</Contact>
            </ContactContainer>
            <Marginer direction="vertical" margin="8em" />
            <AccessibilityContainer />
            <RightsReserved>&copy; 2020 Asha Gross All rights reserved</RightsReserved>
        </FooterContainer>
    )
}