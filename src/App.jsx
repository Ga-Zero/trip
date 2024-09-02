import { useState } from "react";
import "./App.css";
import Header from "./header/Header";
import Input from "./input/Input";
import Nolist from "./postList/Nolist";
import PostList from "./postList/PostList";
import Totalcount from "./totalcount/Totalcount";
function App() {
  const data = JSON.parse(localStorage.getItem("tripLists")) || [];
  let [list, setList] = useState(data);

  const addToList = (newItem) => {
    setList([...list, newItem]);
  };

  const removeFromList = (indexToRemove) => {
    setList(list.filter((_, index) => index !== indexToRemove));
  };

  return (
    <>
      <Header />
      <Input addToList={addToList} />
      <Totalcount list={list} />
      {list.length === 0 ? (
        <Nolist />
      ) : (
        <PostList list={list} removeFromList={removeFromList} />
      )}
    </>
  );
}
export default App;
