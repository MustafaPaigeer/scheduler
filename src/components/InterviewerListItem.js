import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";



export default function InterviewerListItem(props) {
    const interviewerClass = classNames('interviewers__item', {
        'interviewers__item--selected': props.selected,

    });
    const interviewer =  
            props.selected ? props.name : "";
    return (
        <li className={interviewerClass} onClick={() => props.setInterviewer(props.id)}>
                <img
                    className="interviewers__item-image"
                    src={props.avatar}
                    alt={props.name}
                />
            {interviewer}
        </li>
    );
}