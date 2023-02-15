//this is a simple function that must return something that is rendered in the browser. it can and most likely will be some sort of 
//html code or jsx code

//react will not render these custom elements like app (as it can't) instead will render their contetns

import Todo from '../todo.js';

function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <Todo />
      <Todo />
      <Todo />
      <Todo />
    </div> 
  );
}

export default App; 
