import React from 'react';
import styled from 'styled-components';

import linkedInIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import emailIcon from './assets/email.png';
import copyIcon from './assets/copy.png';

const ContactLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 auto;
`;

const ContactLinkRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const LinkItem = styled.a`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
`;

const LinkImage = styled.img`
    height: 32px;
    margin: 16px 8px;
`;

const CopyImage = styled.img`
    margin: 0;
    margin-left: 8px;
    height: 16px;
    cursor: pointer;

    &:active {
        transform: translateY(3px);
    }
`;

const Contact = () => {

    const copyOnClick = () => {
        const el = document.createElement('textarea');
        el.value = "mate@csornyei.com";
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selected =
            document.getSelection()!.rangeCount > 0
            ? document.getSelection()!.getRangeAt(0)
            : false;
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            document.getSelection()!.removeAllRanges();
            document.getSelection()!.addRange(selected);
        }
    }


    return (
            <ContactLinkContainer>
                <ContactLinkRow>
                    <LinkItem href="https://www.linkedin.com/in/mate-csornyei/"><LinkImage src={linkedInIcon} alt="LinkedIn" /></LinkItem>
                    <LinkItem href="https://github.com/csornyei"><LinkImage src={githubIcon} alt="Github" /></LinkItem>
                </ContactLinkRow>
                <ContactLinkRow>
                    <LinkItem href="mailto:mate@csornyei"><LinkImage src={emailIcon} alt="E-mail" /> mate@csornyei.com</LinkItem>
                    <CopyImage src={copyIcon} alt="copy" onClick={copyOnClick} />
                </ContactLinkRow>
            </ContactLinkContainer>
    );
}

export default Contact;