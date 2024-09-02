import "./list.css";

export default function List({ name, index, removeFromList }) {
  return (
    <li className="list">
      <p>{name}</p>
      <i
        className="fa-regular fa-trash-can"
        onClick={() => removeFromList(index)}
      ></i>
    </li>
  );
}
