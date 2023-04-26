
import firebase from "./firebase";
import SubmitConfirm from "../Components/SubmitConfirm"

function EditRecordDatabase(editRecordprops  , id){


    const ref = firebase.firestore().collection(editRecordprops.databasename);
    const result = () => 
    {
            ref
        .doc(id)
        .update(editRecordprops.addnew)
        .catch((err) => {
            console.error(err);
        })
        editRecordprops.setIsOpen(false);

    }

    SubmitConfirm(result , "Confirm to edit");

}

export default EditRecordDatabase;