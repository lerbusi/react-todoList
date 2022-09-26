import React from "react";

const TodoItem = ({
  item,
  index,
  deleteTodoItem,
  completeTodoItem,
  updateTodoItem,
}) => {
  return (
    <div className="todolist">
      <div className="ui big aligned animated selection list">
        <div className="item">
          <div
            className="left aligned content"
            style={{
              textDecoration: item.complete ? "line-through" : "",
              color: item.complete ? "#aeacba" : "",
            }}
          >
            {item.todo}
            <button
              className="ui right floated icon button"
              onClick={() => completeTodoItem(index)}
            >
              <i className="check icon"></i>
            </button>
            <button
              className="ui right floated icon button"
              onClick={() => deleteTodoItem(index)}
            >
              <i className="trash icon"></i>
            </button>
            <button
              className="ui right floated icon button"
              onClick={() => updateTodoItem(index)}
            >
              <i className="edit icon"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
