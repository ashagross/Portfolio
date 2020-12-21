
import React from 'react';
import { Element } from 'react-scroll';
import { Marginer } from '../marginer/index';
import { Form } from '../form/Form';
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
    margin-top: 2em;
    margin-bottom: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
`;
const BrandFooter = styled.img`
    width: 15em;
    height: 15em;

    @media screen and (max-width: 480px) {
        display: none;
    }
`;


const AccessibilityContainer = styled.div`
    padding-top: 6px;
    padding-left: 5px;
    padding-right: 5px;
    color: #f6efe9;
`;

const RightsReserved = styled.div`
    text-align: center;
    width: 80%;
    border-top: 1px solid #e07a5f;
    font-family: 'Lato', sans-serif;
    bottom: 8px;
    color: #f6efe9;
    font-size: 12px;
    
`;

export function Footer(props) {
    return (
        <FooterContainer>
            <Marginer direction="vertical" margin="2em" />
            <ContactContainer>
                <Form />
                <BrandFooter src={BrandImg} />
            </ContactContainer>
            <RightsReserved>&copy; 2020 Asha Gross All rights reserved</RightsReserved>
            <AccessibilityContainer />
        </FooterContainer>
    )
}