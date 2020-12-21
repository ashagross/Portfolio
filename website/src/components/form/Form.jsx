import React, { useState } from 'react';
import { FormSignUp} from './FormSignUp';
import { FormSuccess } from './FormSuccess';
import styled from 'styled-components';


const FormContainer = styled.div`
    width: 25em;
    
        @media screen and (max-width: 480px) {
            margin-left: 5em;
    }
`;


export function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <>
            <FormContainer>
                {!isSubmitted ? (
                    <FormSignUp submitForm={submitForm} />
                ) : (
                        <FormSuccess />
                    )}
            </FormContainer>
        </>
    );
}