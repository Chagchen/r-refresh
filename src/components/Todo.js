//we must return here something in the function so it can be rendered
function Todo(props) {
  function deleteHandler() {
    console.log("Clicked!");
    console.log(props.text);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
//we need to expoert this as a defult, to make this function available outside
//of this file and usable in other files.
