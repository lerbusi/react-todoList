import React, { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import "./styles/style.css";

const App = () => {
  //內建items test用
  // const [todoItems, setTodoItems] = useState([
  //   { todo: "第1件事", complete: false },
  //   { todo: "第2件事", complete: false },
  //   { todo: "第3件事", complete: false },
  // ]);

  const [todoItems, setTodoItems] = useState(() => {
    const savedTodos = localStorage.getItem("todoItems");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const createTodoItem = (todo) => {
    const newTodoItem = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItem);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];

    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];

    const item = newTodoItems[index];
    //需修改的該項item
    let newItem = prompt(`修改 【${item.todo}】 的內容`, item.todo);
    //提示修改內文, 新的修改內文 = newItem
    let changedTodoItem = { todo: newItem, complete: false };
    //已修改的內文 = 新object
    newTodoItems.splice(index, 1, changedTodoItem);
    //[...todoItems]加入一條新的已修改內文
    if (newItem === null || newItem === "") {
      //如果 提交空白 or 沒修改內文 直接return
      return;
    } else {
      newItem = item.todo;
    }
    setTodoItems(newTodoItems);
  };

  //get local storage todoitems

  //存到local
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
  }, [todoItems]);

  const checkItems = (todoItems) => {
    if (todoItems) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="app">
      <h1>To Do List</h1>
      <br />
      <TodoInput createTodoItem={createTodoItem} />
      <div className="border" style={{ textAlign: "center" }}>
        <h2 style={{ color: "#68638f", padding: "1rem" }}>代辦事項</h2>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            index={index}
            item={item}
            deleteTodoItem={deleteTodoItem}
            completeTodoItem={completeTodoItem}
            updateTodoItem={updateTodoItem}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
