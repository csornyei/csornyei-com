import React from "react";
import styled from 'styled-components';

import profile from './profile.jpeg';

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;

    background-color: #142850;
    width: 100%;
    padding: 26px 24px;
`;

const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const HeaderMainText = styled.h1`
    font-family: "Montserrat";
    font-weight: normal;
    font-size: 3em;
    color: #eee;
    padding-bottom: 8px
`;

const HeaderText = styled.h2`
    font-family: "Montserrat";
    font-weight: normal;
    color: #eee;
    padding-bottom: 8px;
`;

const HeaderTextRight = styled(HeaderText)`
    align-self: flex-end;
`;

const HeaderTextBold = styled.span`
    font-family: "Montserrat";
    font-weight: bold;
    color: #eee;
`;

const HeaderPicture = styled.img`
    height: 300px;
    border-radius: 50%;
    margin-right: 64px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderPicture src={profile} alt="Me"/>
            <HeaderTextContainer>
                <HeaderMainText>Hi, I'm <HeaderTextBold>Máté</HeaderTextBold></HeaderMainText>
                <HeaderTextRight>a Web Developer</HeaderTextRight>
                <HeaderText>from Budapest</HeaderText>
            </HeaderTextContainer>
        </HeaderContainer>
    )
}

export default Header