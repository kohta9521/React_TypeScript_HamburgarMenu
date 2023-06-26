import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './App.css';
import { Text } from './Text';
import Todo from './Todo';
import { TodoType } from "./types/todo";



function App() {

  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios.get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setTodos(res.data);
    })
  }

  return (
    <div className="App">
      <h1>Ts project</h1>
      <Text color="red" fontSize="18px" />

      <button onClick={onClickFetchData}>データ取得</button>
    {todos.map((todo) => (
      <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
    ))}
    </div>
  );
}

export default App;
