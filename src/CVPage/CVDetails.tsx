import React from 'react';
import styled from 'styled-components';
import { Job } from './types';

const DetailContainer = styled.div`
    background-color: #1768AC;
    color: #C4C7D4;
    width: 100%;

    margin-top: 0;
    margin-bottom: 8px;
    padding: 6px 8px 6px 8px;
`;

const DetailHeader = styled.h4`
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    font-weight: normal;
    color: #C4C7D4;

    margin-top: 6px;
`;

const DetailText = styled.p`
    font-family: Oswald, Arial, Helvetica, sans-serif;
    color: #C4C7D4;
`;

const DetailList = styled.ul`
    list-style-type: none;
    padding-left: 12px;
    color: #C4C7D4;
`;

const DetailListItem = styled.li`
    font-family: Oswald, Arial, Helvetica, sans-serif;
    color: #C4C7D4;
`;



const CVDetails = (props: {job: Job}) => {


    let dutyList = null;
    let techList = null;
    let currentList = null;

    if (!!props.job.duties) {
        const duties = props.job.duties!.map((duty) => {
            return <DetailListItem>{duty}</DetailListItem>
        });
        dutyList = (
            <>
                <DetailHeader>Duties</DetailHeader>
                <DetailList>
                    {duties}
                </DetailList>
            </>
        )
    }

    if (!!props.job.technologies) {
        const technologies = props.job.technologies!.map((tech) => {
            return `${tech}, `
        })
        techList = (
            <>
                <DetailHeader>Used technologies</DetailHeader>
                <DetailText>{technologies}</DetailText>
            </>
        )
    }

    if (!!props.job.current) {
        currentList = (
            <>
                <DetailHeader>Currently doing: </DetailHeader>
                <DetailText>{props.job.current}</DetailText>
            </>
        );
    }

    const date = <DetailText>{props.job.startDate} - {props.job.endDate} {!!props.job.duration ? `(${props.job.duration})` : ""}</DetailText>

    return (
        <DetailContainer>
            <DetailHeader>Date</DetailHeader>
            {date}
            {currentList}
            {dutyList}
            {techList}
        </DetailContainer>
    );
}

export default CVDetails;