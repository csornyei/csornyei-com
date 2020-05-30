import React from 'react';
import styled from 'styled-components';
import { Job } from './types';

const DetailContainer = styled.div`
    background-color: #ddd;
    width: 100%;

    margin-top: 0;
    margin-bottom: 8px;
    padding: 6px 8px 6px 8px;
`;

const DetailHeader = styled.h4`
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: normal;

    margin-top: 6px;
`;

const DetailText = styled.p`
    font-family: Oswald, Arial, Helvetica, sans-serif;
`;

const DetailList = styled.ul`
    list-style-type: none;
    padding-left: 12px;
`;

const DetailListItem = styled.li`
    font-family: Oswald, Arial, Helvetica, sans-serif;
`;



const CVDetails = (props: {job: Job}) => {

    const duties = props.job.duties.map((duty) => {
        return <DetailListItem>{duty}</DetailListItem>
    });

    const technologies = props.job.technologies.map((tech) => {
        return `${tech}, `
    })

    return (
        <DetailContainer>
            <DetailHeader>Date</DetailHeader>
            <DetailText>{props.job.startDate} - {props.job.endDate} ({props.job.duration})</DetailText>
            <DetailHeader>Duties</DetailHeader>
            <DetailList>
                {duties}
            </DetailList>
            <DetailHeader>Used technologies</DetailHeader>
            <DetailText>{technologies}</DetailText>
        </DetailContainer>
    );
}

export default CVDetails;