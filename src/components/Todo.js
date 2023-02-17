import {useState} from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

//we must return here something in the function so it can be rendered
function Todo(props) {
  const [modalIsOpen , setModalIsOpen]= useState(false);

  function deleteHandler(){
    setModalIsOpen(true); 
  };

  function closeModalHandler(){
    setModalIsOpen(false);
  };

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className='btn' onClick={deleteHandler }>Delete</button>
      </div>
      {modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>);
};

export default Todo;
//we need to expoert this as a defult, to make this function available outside
//of this file and usable in other files.
