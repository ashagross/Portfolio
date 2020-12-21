import React from 'react';
import styled from 'styled-components';


import { Marginer } from '../marginer';

const ProjectContainer = styled.div`
   width: 350px;
   height: 450px;
   background-color: #fff;
   box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
   border-radius: 3px;
   margin: 5px 0;
   position: relative;
   padding: 10px 2em;
`;

const ProjectImg = styled.img`
    width: 15em;
    height: 15em;
    margin-top: 2em;
    margin-left: 1.5em;
    display: flex;
    justify-content: center;
`;

const Line = styled.span`
    min-width: 100%
    min-height: 0px;
    display: flex;
    border: 1px solid #e07a5f;
    margin-bottom: 1em;
`;

const LangImg = styled.img`
    width: 1.5em;
    height: 1.5em;
    border-radius: 50%
`;

const CodeDetails = styled.div`
    display: flex;
    align-items; center;
    justify-content: space-around;
`;


export function ProjectCard(props) {
    
    const { projectImgUrl, langImgUrl } = props;

    return (
        <ProjectContainer>
            <ProjectImg src={projectImgUrl} />
            <Marginer direction='vertical' margin='7em' />
            <Line />
            <CodeDetails>
                <LangImg src={langImgUrl} />
                <LangImg src={langImgUrl} />
                <LangImg src={langImgUrl} />
                <LangImg src={langImgUrl} />
            </CodeDetails>
        </ProjectContainer>
    )
}