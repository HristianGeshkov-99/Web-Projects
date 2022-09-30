import "./PersonList.css";
import Person from "./Person";

const PersonList = (props) => {
  let displayContent = props.items.map((person, index) => {
    if (index > 0) {
      return (
        <Person
          onClick={() => props.onDelete(person)}
          name={person.name}
          age={person.age}
          key={person.id}
        />
      );
    } else {
      return <span key=""></span>;
    }
  });

  return <div className="personlist">{displayContent}</div>;
};

export default PersonList;
