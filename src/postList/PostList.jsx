import List from "./List";
import "./list.css";

export default function PostList({ list, removeFromList }) {
  return (
    <ul className="postList mw">
      {list.map((item, index) => (
        <List
          key={index}
          name={item}
          index={index}
          removeFromList={removeFromList}
        />
      ))}
    </ul>
  );
}
