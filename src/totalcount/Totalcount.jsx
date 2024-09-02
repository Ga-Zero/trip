import "./totalcount.css";
export default function Totalcount({ list }) {
  return (
    <div className="count mw">
      <strong>count</strong>
      <span>{list.length}</span>
    </div>
  );
}
