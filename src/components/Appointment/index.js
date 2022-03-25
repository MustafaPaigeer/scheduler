import React, { Fragment } from "react";
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empy";


export default function Appointment(props) {
    const appointment = props.time ?  `${props.time}` : "no appoitment";
    const interview = props.interview ? <Show />: <Empty />;
  
      return (
        <article className="appointment">
            {appointment}
            {Header}
            {interview}
        </article>
    )
  };