import React from 'react';
import styled from 'styled-components';



const SkillsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 5em;
    flex-wrap: wrap-reverse;
    flex-direction: ${({ isReversed }) => isReversed && 'row-reverse'};
`;

const SkillsImg = styled.img`
    margin-left: 200px;
    width: 9em;
    height: 9em;
`;

const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 60%;
`;

const Details = styled.p`
    color: #7a7a7a;
    font-size: 19px;
    text-align: center;
    max-width: 70%;
    font-family: 'Lato', sans-serif;
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