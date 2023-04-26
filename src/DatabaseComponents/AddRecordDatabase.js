import firebase from "./firebase";
import uuid from 'react-uuid';
import AlertMsg from "../Components/AlertMsg";

async function AddRecordDatabase(newRecord , databasename , setLoading){
    const ref = firebase.firestore().collection(databasename);

    await ref
    .doc(uuid())
    .set(newRecord)
    .catch((err) => {
        console.error(err);
    })
    AlertMsg("تم اضافة جديدة");

}

export default AddRecordDatabase;