import "./Person.css";

const Person = (props) => {
  return (
    <div onClick={props.onClick} className="person">
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};
export default Person;
