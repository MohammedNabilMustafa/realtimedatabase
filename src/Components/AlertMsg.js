import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function AlertMsg  (msg) {
    let res = confirmAlert({
      title: "Alert",
      message: msg,
      buttons: [
        {
          label: 'Close',
        },
      ],
    });
  };

  export default AlertMsg;