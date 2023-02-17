function Backdrop (props){
  return <div className="backdrop" onClick={props.onCancel}/>; //has no content so it can be a self-closing div
}

export default Backdrop;