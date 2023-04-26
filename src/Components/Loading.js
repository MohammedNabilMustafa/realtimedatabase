import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
    content: {
        
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        border: 'none',
        background: 'none',

    },
};

Modal.setAppElement('#root');

function Loading() {

    {/* <Spinner animation="grow" /> */ }
    const [modalIsOpen, setIsOpen] = React.useState(false);


    function openModal() {

        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }


    return ( <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
    >
        <Spinner animation="grow" />
    </Modal>);
}

export default Loading;