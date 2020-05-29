import React from 'react';
import { Job } from './types';

const CVDetails = (props: {job: Job}) => {
    return (
        <div>
            <h4>Date</h4>
            <p>{props.job.startDate} - {props.job.endDate} ({props.job.duration})</p>
            <h4>Duties</h4>
            <ul>
                <li>List of duties...</li>
            </ul>
            <h4>Used technologies</h4>
            <p>The technologies I used here</p>
        </div>
    );
}

export default CVDetails;