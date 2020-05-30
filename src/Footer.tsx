import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: #2A3132;
    padding: 16px 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FooterText = styled.h3`
    font-family: OpenSans, Arial, Helvetica, sans-serif;
    color: #BCCFDC;
`;

const Footer = () => {
    return (
    <FooterContainer>
        <FooterText>Copyright 2020 &copy;</FooterText>
        <FooterText>Csörnyei Máté</FooterText>
    </FooterContainer>
    );
}

export default Footer;