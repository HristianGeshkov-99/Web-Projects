import NewPerson from "./components/NewPerson";
import { useState, useEffect } from "react";
import PersonList from "./components/PersonList";

export default function App() {
  // Initialize the persons state to populate with the current local storage objects or create a new one
  const [persons, setPersons] = useState(() => {
    const people = JSON.parse(localStorage.getItem("users"));
    return people || [{ id: "", name: "", age: "" }];
  });

  // Saves the new persons state to the local storage every time the persons state changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(persons));
  }, [persons]);

  const saveEnteredDataHandler = (enteredData) => {
    setPersons((prevData) => {
      return [...prevData, enteredData];
    });
  };
  const onDeleteHandler = (personToRemove) => {
    setPersons((prevData) => {
      return prevData.filter((person) => person.id !== personToRemove.id);
    });
  };
  return (
    <>
      <NewPerson onSaveEnteredData={saveEnteredDataHandler}></NewPerson>
      <PersonList onDelete={onDeleteHandler} items={persons} />
    </>
  );
}
