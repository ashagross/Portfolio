import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';


const ArrowContainer = styled.div`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background-color: rgba(113, 113, 113, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    cursor: pointer;
        &:hover {
        border: 2px solid #e07a5f;
    }
`;

const ArrowIcon = styled.div`
    margin-top: 3px;
    color: #f6efe9;
    font-size: 25px;
    }
`;


export function DownArrow() {
    return (
        <ArrowContainer>
            <ArrowIcon>
                <FontAwesomeIcon icon={faAngleDoubleDown} />
            </ArrowIcon>
        </ArrowContainer>
    );
}