import React from "react";
import "./styles.scss";


export default function Appointment(props) {
    const appointment = props.time ? `Appoitment at ${props.time}` : "No Appoitments";
  
      return (
        <article className="appointment">
            {appointment}
        </article>
    )
  };