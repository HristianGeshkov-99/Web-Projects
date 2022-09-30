import { React, useState, useRef } from "react";
import "./NewPerson.css";
import Alert from "./alerts/Alert";

const NewPerson = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    nameInputRef.current.focus();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (not empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age.",
      });
      return;
    }

    const personData = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    props.onSaveEnteredData(personData);
    // I know manipulating the DOM with refs isn't a good idea, but I deem it acceptable when resetting input values.
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <Alert
          onConfirm={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <div className="new-person">
        <form onSubmit={submitHandler}>
          <div>
            <label>Name</label>
            <input type="text" ref={nameInputRef}></input>
          </div>
          <div>
            <label>Age (Years)</label>
            <input
              type="number"
              min="0"
              max="120"
              step="1"
              ref={ageInputRef}
            ></input>
          </div>
          <button type="submit" className="submit-button">
            Add Person
          </button>
        </form>
      </div>
    </>
  );
};

export default NewPerson;
