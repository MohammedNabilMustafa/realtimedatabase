import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function SubmitConfirm  (result , msg) {
    let res = confirmAlert({
      title: msg,
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick : () => {
            result();
          }
        },
        {
          label: 'No',
        },
      ],
    });
  };

  export default SubmitConfirm;