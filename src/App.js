//this is a simple function that must return something that is rendered in the browser. it can and most likely will be some sort of 
//html code or jsx code

//react will not render these custom elements like app (as it can't) instead will render their contetns
function App() {
  return (
    <div>
      <h1>My To Do List</h1>
      <div className = 'card'>
        <h2>TITLE</h2>
        <div className="actions">
        <button className="btn">Delete</button>
        </div>
      </div>
    </div> 
  );
}

export default App; 
