import React from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from '../../components/sectionTitle';
import { Marginer } from '../../components/marginer';
import { MySkills } from '../../components/mySkills';


import NodeImg from '../../assets/icons/node-brands.svg';
import ReactImg from '../../assets/icons/react-brands.svg';
import BootstrapImg from '../../assets/icons/bootstrap-brands.svg';

const AboutMeContainer = styled(Element)`
    width: 100%;
    min-height: 1100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
`;

export function AboutMeSection(props) {
    return (
        <AboutMeContainer name='aboutMeSection'>
            <SectionTitle>My Skills</SectionTitle>
            <Marginer direction='vertical' margin='3em' />
            <MySkills 
                title='React.js'
                description='Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog hack.'
                imgUrl={ReactImg}
            />
            <MySkills
                title='Node.js'
                description='Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog hack.'
                imgUrl={NodeImg}
                isReversed
            />
            <MySkills
                title='Styling'
                description='Cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog hack.'
                imgUrl={BootstrapImg}
            />
        </AboutMeContainer>
    )
}