
import firebase from "./firebase";
import SubmitConfirm from "../Components/SubmitConfirm"

function DeleteRecordDatabase(deleteRecord , databasename){

    const ref = firebase.firestore().collection(databasename);

    const result = () => ref
                    .doc(deleteRecord.id)
                    .delete()
                    .catch((err) => {
                        console.error(err);
                    })

    SubmitConfirm(result , "Confirm to delete");
    
}

export default DeleteRecordDatabase;