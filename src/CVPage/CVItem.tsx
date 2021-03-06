import React from 'react';
import styled from 'styled-components';
import { Job } from './types';
import CVDetails from './CVDetails';

const ItemContainer = styled.div<{detailsOpened: boolean}>`
    width: 100%;
    background-color: #2A3132;

    padding: 16px 8px;
    margin-bottom: ${props => (props.detailsOpened ? 0 : 8)}px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    cursor: pointer;

    &:hover {
        background-color: #aeb4b9;
    }
`;

const Logo = styled.img`
    height: 48px;
    margin-right: 32px;
`;

const PositionTitle = styled.h3`
    font-family: Montserrat Arial, Helvetica, sans-serif;
    color: #BCCFDC;
    font-weight: bold;
`;

const DropdownArrow = styled.img`
    margin-left: auto;
    height: 12px;
`;

interface CVItemProps {
    job: Job;
    detailsOpened: boolean;
    clicked: () => void;
}

const CVItem = (props: CVItemProps) => {

    const details = props.detailsOpened ? <CVDetails job={props.job} /> : null

    return (
        <>
            <ItemContainer onClick={props.clicked} detailsOpened={props.detailsOpened}>
                <Logo src={props.job.logo} alt={props.job.employer} />
                <PositionTitle>{props.job.position}</PositionTitle>
                <DropdownArrow src="https://s3.eu-central-1.amazonaws.com/www.csornyei.com/assets/dropdown.png" alt="Dropdown icon" />
            </ItemContainer>
            {details}
        </>
    );
}

export default CVItem;