import React, {useEffect} from 'react';
import "./styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import useVisualMode from 'hooks/useVisualMode';
import Form from './Form';
import Status from './Status';
import Confirm from "./Confirm";
import Error from "./Error"

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const CONFIRM = "CONFIRM";
const DELETING = "DELETING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

export default function Appointment(props) {
  /* props: id, time, interview, interviewers, bookInterview, cancelInterview */
  //console.log(props.student)
  console.log(props.interview)
  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY,
    props.id
  );
  useEffect(() => {
    if (props.interview && mode === EMPTY) {
      transition(SHOW);
    }
    if (props.interview === null && mode === SHOW) {
      transition(EMPTY);
    }
  }, [props.interview, transition, mode]);

  // save function for form
  const save = (name, interviewer) => {
    transition(SAVING)
    const interview = {
      student: name,
      interviewer
    }
    transition(SAVING);
    props.bookInterview(props.id, interview)
      .then(res => transition(SHOW))
      .catch(err => transition(ERROR_SAVE, true));
  }


  const destroy = () => {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(res => transition(EMPTY))
      .catch(err => transition(ERROR_DELETE, true))
  };
  
  return (
    <article className="appointment" data-testid="appointment">
      <Header time={props.time} />
      {mode === EMPTY && !props.interview && (<Empty onAdd={() => transition(CREATE)} />)}
      {mode === SHOW && props.interview && (
        <Show
        student={props.interview.student}
        interviewer={props.interview.interviewer} 
        onEdit={() => transition(EDIT)} 
        onDelete={() => transition(CONFIRM)} />
      )}
      {mode === CREATE && (
        <Form
          name={props.student}
          interviewers={props.interviewers}
          interviewer={props.interviewer}
          onCancel={back}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status message="Saving" />
      )}
      {mode === DELETING && (
        <Status message="Deleting" />
      )}
      {mode === CONFIRM && (
        <Confirm
          message="Are you sure you would like to delete"
          onConfirm={destroy}
          onCancel={back}
        />
      )}
     {mode === EDIT && (
     <Form 
       name={props.interview ? props.interview.student : ""} 
       interviewers={props.interviewers} 
       interviewer={props.interview ? props.interview.interviewer.id : props.interviewer} 
       onSave={save} 
       onCancel={back}
       />
      )}
      {mode === ERROR_SAVE && (
        <Error
          message="Could not save appointment"
          onClose={back}
        />
      )}
      {mode === ERROR_DELETE && (
        <Error
          message="Could not cancel appointment"
          onClose={back}
        />
      )}
    </article>
  );
}