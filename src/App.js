//this is a simple function that must return something that is rendered in the browser. it can and most likely will be some sort of
//html code or jsx code

//react will not render these custom elements like app (as it can't) instead will render their contetns


import Todo from "./components/Todo";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <Todo text="hot yoga" />
      <Todo text="spanish" />
      <Todo text="running" />
      <Todo text="code" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
