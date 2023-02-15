//we must return here something in the function so it can be rendered
function Todo() {
  return (
    <div className="card">
      <h2>TITLE</h2>
      <div className="actions">
        <button className="btn">Delete</button>
      </div>
    </div>)
};

export default Todo;
//we need to expoert this as a defult, to make this function available outside
//of this file and usable in other files.
