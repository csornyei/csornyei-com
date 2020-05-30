import React from "react";
import styled from 'styled-components';

import profile from './assets/profile.jpeg';
import background from './assets/autumn-forest.jpg';

const HeaderContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;


    background-color: rgba(195, 95, 70, 0.6);


    &::before {
        background-image: url(${background});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

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
    padding-bottom: 8px;

    animation-duration: 2s;
    animation-name: slide-from-right;
`;

const HeaderText = styled.h2`
    font-family: "Montserrat";
    font-weight: normal;
    color: #eee;
    padding-bottom: 8px;

    animation-duration: 2s;
    animation-name: slide-from-right;
`;

const HeaderTextRight = styled(HeaderText)`
    align-self: flex-end;

    animation-name: slide-from-left;
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

    animation-duration: 2s;
    animation-name: fadeIn;
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