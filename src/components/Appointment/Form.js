import React, { useState } from "react";
import Button from "components/Button";
import InterviewerList from "components/InterviewerList";

export default function Form(props) {
    const [student, setStudent] = useState(props.student || "");
    const [interviewer, setInterviewer] = useState(props.interviewer || null);
    const [error, setError] = useState("");

    //Clears the form
    const reset = () => {
        setStudent("");
        setInterviewer(null);
    }
    //reset the form on cancel button click
    function cancel() {
        reset();
        props.onCancel();
    }
    //validate the submission
    function validate() {
        if (student === "") {
            setError("Student name cannot be blank");
            return;
        }
        else if (!interviewer) {
            setError("Please choose an interviewer.")
            return;
        }
        setError("")
        props.onSave(student, interviewer);
    };
    return (
        <main className="appointment__card appointment__card--create">
            <section className="appointment__card-left">
                <form autoComplete="off" onSubmit={e => e.preventDefault()}>
                    <input
                        className="appointment__create-input text--semi-bold"
                        name="name"
                        type="text"
                        placeholder="Enter Student Name"
                        value={student || ""}
                        onChange={(event) => setStudent(event.target.value)}
                        data-testid="student-name-input"
                    />
                    <section className="appoitment_validation">{error}</section>
                </form>
                <InterviewerList
                    interviewers={props.interviewers}
                    value={interviewer}
                    onChange={event => setInterviewer(event)}
                />
            </section>
            <section className="appointment__card-right">
                <section className="appointment__actions">
                    <Button danger onClick={cancel}>Cancel</Button>
                    <Button confirm onClick={event => { validate() }}>Save</Button>
                </section>
            </section>
        </main>
    )
}