import React from 'react';
import styled from 'styled-components';



const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 5em;
    flex-wrap: wrap-reverse;
    flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};

    @media screen and (max-width: 480px) {
        justify-content: center;
    }
`;

const SkillsImg = styled.img`
    margin-left: 200px;
    width: 9em;
    height: 9em;

    @media screen and (max-width: 480px) {
        width: 7em;
        height: 7em;
        margin-right: 12em;
    }
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
    
    @media screen and (max-width: 480px) {
        max-width: 100%;
    }
`;

const Details = styled.p`
    color: #7a7a7a;
    font-size: 19px;
    text-align: center;
    max-width: 70%;
    font-family: 'Lato', sans-serif;

    @media screen and (max-width: 480px) {
        width: 100%;
        font-size: 15px;
        padding-left: 1em;
    }
`;

const Title = styled.h2`
    color: #e07a5f;
    font-size: 30px;
    margin: 5px 0;
    font-family: 'Bebas Neue', cursive;
`;


export function MySkills(props) {
    const { imgUrl ,title, description, isReversed } = props;

    return (
        <SkillsContainer isReversed={isReversed}>
            <DescriptionContainer>
                <Title> {title} </Title>
                <Details>{description}</Details>
            </DescriptionContainer>
            <SkillsImg src={imgUrl} />
        </SkillsContainer>
    );
}