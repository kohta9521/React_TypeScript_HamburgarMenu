import axios from 'axios';
import React from 'react';
import './App.css';

function App() {

  const onClickFetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      console.log(res);
    })
  }

  return (
    <div className="App">
      <h1>Ts project</h1>

      <button onClick={onClickFetchData}>データ取得</button>
    </div>
  );
}

export default App;