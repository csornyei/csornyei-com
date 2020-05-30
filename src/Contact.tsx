import React from 'react';
import styled from 'styled-components';

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
                    <LinkItem href="https://www.linkedin.com/in/mate-csornyei/"><LinkImage src="https://s3.eu-central-1.amazonaws.com/www.csornyei.com/assets/linkedin.png" alt="LinkedIn" /></LinkItem>
                    <LinkItem href="https://github.com/csornyei"><LinkImage src="https://s3.eu-central-1.amazonaws.com/www.csornyei.com/assets/github.png" alt="Github" /></LinkItem>
                </ContactLinkRow>
                <ContactLinkRow>
                    <LinkItem href="mailto:mate@csornyei"><LinkImage src="https://s3.eu-central-1.amazonaws.com/www.csornyei.com/assets/email.png" alt="E-mail" /> mate@csornyei.com</LinkItem>
                    <CopyImage src="https://s3.eu-central-1.amazonaws.com/www.csornyei.com/assets/copy.png" alt="copy" onClick={copyOnClick} />
                </ContactLinkRow>
            </ContactLinkContainer>
    );
}

export default Contact;