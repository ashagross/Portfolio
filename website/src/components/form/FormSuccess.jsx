import React from 'react';
import styled from 'styled-components';
import './Form.css';

import FormSubmitImg from '../../assets/pictures/FormSubmitImg.png';




const SuccessImg = styled.img`
    height: 20em;
    width: 20em;
    padding-left: 1em;

        @media screen and (max-width: 480px){
           height: 20em;
           width: 20em;
           padding-bottom: 4em;
           padding-left: 1em;
}
`;



export function FormSuccess() {
    return (
        <div className = 'form-content-right' >
                <SuccessImg src={FormSubmitImg} />
        </div>
    )
};