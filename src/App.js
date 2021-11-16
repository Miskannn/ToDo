import Form from './components/Form'
import Header from './components/Header'
import List from './components/List';
import React, {useState} from 'react';

const App = () => {
  const [todos, setTodos] = useState([{id:0,todo:"this is a simple task"}])

  return (
    <div className="App">
      <Header/>
      <Form setTodo={setTodos} len={todos.length}/>
      <List todoList={todos} setTodo={setTodos}/>
    </div>
  );
}

export default App;