import React, { useState } from "react";

const TodoInput = ({ createTodoItem }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === "") {
      return alert("請輸入內文");
    }
    createTodoItem(value);
    setValue("");
  };

  return (
    <div className="TodoInput">
      <form onSubmit={handleSubmit}>
        <div className="ui large action input">
          <input
            type="text"
            placeholder="請輸入內文"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button className="ui button" onClick={handleSubmit}>
            建立新待辦事項
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoInput;
