
import firebase from "../DatabaseComponents/firebase";
import EditRecordDatabase from "../DatabaseComponents/EditRecordDatabase";
import React , { useEffect, useRef, useState } from "react";

function UpdateProfile(updateprofileprops){

    function edithandler(event)
    {
        event.preventDefault();

        updateprofileprops.fields.map((item,index)=>{
            if(item.fieldtype === "input")
            {
                updateprofileprops.addnew[item.name] = "";
                if(event.target[index+1].value)
                {
                    updateprofileprops.addnew[item.name] = event.target[index+1].value
                }
            }
        })
        EditRecordDatabase(updateprofileprops , event.target[0].value );
    }


    return(
        <>
            <form className="addForm" onSubmit={edithandler} >
                <div className="col-auto container">
                    <input className="form-control mb-3" name="databaseID" value={updateprofileprops.id} readOnly/>

                    {updateprofileprops.fields.map((item,index)=>
                            {
                                // const [value , setValue] = useState(updateprofileprops.doc.data()[item.name]);
                                if(item.fieldtype === "input")
                                {                                
                                    return <input className={item.className}  type={item.type} name={item.name} placeholder={item.placeholder} defaultValue={updateprofileprops.doc.data()[item.name]} />
                                }
                                else if (item.fieldtype === "button")
                                {
                                    return  <button  className={item.className}  >Edit</button>
                                }

                            }
                            
                        ) 
                    }

                </div>
            </form>
        </>
    )
  

}

export default UpdateProfile;