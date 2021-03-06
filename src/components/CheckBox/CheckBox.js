import React, { useState, useEffect, useContext } from "react";
import "./CheckBox.css";
import { TodoContext } from "../../Main";
import { updateDoc } from "../../firebase/firestore";
import { useAuthContext } from "../AuthProvider/AuthProvider";

export default function CheckBox({ todo }) {
  const { state, dispatch } = useContext(TodoContext);
  const [update, setUpdate] = useState(0);
  const { authenticated, uid } = useAuthContext();

  useEffect(() => {
    console.log("why", update);
    if (update) {
      updateDoc(uid, { todos: state.todos });
      console.log("updated", state.todos);
    }
  }, [update, uid, state.todos]);

  const handleClick = (e) => {
    e.stopPropagation();
    dispatch({
      type: "EDIT_TODO",
      editedTodo: { ...todo, isCompleted: !todo.isCompleted },
      check: true,
    });
    if (authenticated) {
      setUpdate((update) => update + 1);
      console.log(update);
    }
  };

  return (
    <div
      className="completeCheckBox"
      onClick={handleClick}
      style={{ backgroundColor: todo.isCompleted ? "rgb(100, 140, 250)" : "" }}
    >
      <div
        className="checkMark"
        style={{ display: todo.isCompleted ? "block" : "none" }}
      ></div>
    </div>
  );
}
