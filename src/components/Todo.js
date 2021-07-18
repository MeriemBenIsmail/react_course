import { useState } from 'react';
import Modal from './Modal.js';
 import Backdrop from './Backdrop.js';
function Todo(props) {

  // 2 elements
  const [ modalIsOpen, setModelIsOpen] = useState(false); // delete modal not open

  function deleteHandler() {

    setModelIsOpen(true);
    
  }

  function closeModalHandler() {

    setModelIsOpen(false);
    
  }
  return (

    <div className='card'>

      <h2>{ props['text'] }</h2>
      <div className='actions'>
        <button className='btn' onClick = { deleteHandler /* no ()*/ } >Delete</button>
      </div>

      { modalIsOpen && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
      { modalIsOpen && <Backdrop onClick={closeModalHandler} /> }


    </div>

  );

}

export default Todo;