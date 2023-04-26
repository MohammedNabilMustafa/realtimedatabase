
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-10%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root');

function CreateModal(Modalprops)
{

  function openModal() {
    Modalprops.setIsOpen(true);
  }

  function closeModal() {
    Modalprops.setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={Modalprops.modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >

        {Modalprops.modalContent}
      </Modal>
    </div>
  );
  
}

export default CreateModal;
