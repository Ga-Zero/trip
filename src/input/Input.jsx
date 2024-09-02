import "./input.css";
import { useState } from "react";

export default function Input({ addToList }) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      addToList(inputValue);
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="inputFild mw">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="여행지를 입력해주세요"
        />
        <button type="submit">등록</button>
      </div>
    </form>
  );
}
