import React, { useEffect, useState } from "react";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import TodoList from "../../components/TodoList";
import queryString from "query-string";
import TodoForm from "../../components/TodoForm/TodoForm";

Listpage.propTypes = {};

function Listpage(props) {
  const inittodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "completed",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  const history = useHistory();
  const match = useRouteMatch();
  const location = useLocation();
  const [todoList, setTodoList] = useState(inittodoList);
  const [filteredStatus, setFilteredStatus] = useState("all");

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilteredStatus(params.status || "all");
  }, [location.search]);
  const handelTodoClick = (todo, index) => {
    const newTodoList = [...todoList];

    const newTodo = {
      ...newTodoList[index],
      status: newTodoList[index].status === "new" ? "completed" : "new",
    };
    newTodoList[index] = newTodo;

    setTodoList(newTodoList);
  };
  const handelShowAllCLick = () => {
    // setFilteredStatus("all");
    const newparams = { status: "all" };
    history.push({
      path: match.path,
      search: queryString.stringify(newparams),
    });
  };

  const handelShowCompletedClick = () => {
    // setFilteredStatus("completed");
    const newparams = { status: "completed" };
    history.push({
      path: match.path,
      search: queryString.stringify(newparams),
    });
  };

  const handelShowNewClick = () => {
    // setFilteredStatus("new");
    const newparams = { status: "new" };
    history.push({
      path: match.path,
      search: queryString.stringify(newparams),
    });
  };

  const renderedTodoList = todoList.filter((todo) => filteredStatus === "all" || filteredStatus === todo.status);
  console.log(renderedTodoList);

  const handelSunmit = (values) => {
    console.log("Form submit:", values);
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: "new",
    };
    const newItemList = [...todoList, newTodo];
    setTodoList(newItemList);
  };
  return (
    <div>
      <h3>What to do</h3>
      <TodoForm onSubmit={handelSunmit} />

      <h3 className="hung">Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handelTodoClick} />
      <div>
        <button onClick={handelShowAllCLick}>Show All</button>
        <button onClick={handelShowCompletedClick}>Show Completed</button>
        <button onClick={handelShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default Listpage;
