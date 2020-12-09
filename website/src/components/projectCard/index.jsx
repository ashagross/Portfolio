import React from 'react';
import styled from 'styled-components';


const ProjectContainer = styled.div`
   width: 350px;
   height: 430px;
   background-color: #fff;
   box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
   border-radius: 3px;
   margin: 5px 0;
   position: relative;
   padding: 10px 1.2em;
`;     

export function ProjectCard(props) {
    return (
        <ProjectContainer>
            Card
        </ProjectContainer>
    )
}