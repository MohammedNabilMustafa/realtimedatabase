
import React, { useRef } from "react";
import AddRecordDatabase from "../DatabaseComponents/AddRecordDatabase"
import AlertMsg from "../Components/AlertMsg"


function AddMember(addMembeprops) {

    function handlechange(event) {

        event.preventDefault();

        let checkvalidation = false;

        addMembeprops.fields.map((item, index) => {

            if (item.required == true && event.target[index].value == "") {
                AlertMsg(item.label + " Missing");
                checkvalidation = true;
                return;
            }
            if (item.fieldtype === "input" || item.fieldtype === "select") {
                addMembeprops.addnew[item.name] = "";
                if (event.target[index].value) {
                    addMembeprops.addnew[item.name] = event.target[index].value
                }
            }
        })

        if (checkvalidation) {

            return;
        }

        AddRecordDatabase(addMembeprops.addnew, addMembeprops.databasename );

        if (addMembeprops.reset) {
            addMembeprops.fields.map((item, index) => {
                if (item.fieldtype === "input")
                    item.ref.current.value = "";
            })
        }

    }



    return (
        <>
            <div className="card">
                <div className="card-header">
                    اضف جديد
                </div>
                <div className="card-body">

                    <form className="addForm" onSubmit={handlechange} >
                        <div className="div-two  ">

                            {addMembeprops.fields.map((item, index) => {

                                if (item.fieldtype === "input") {
                                    return (<div class="p-3"><label className="form-label" >{item.label}</label>
                                        <input step="0.1" className={item.className} type={item.type} name={item.name} placeholder={item.placeholder} ref={item.ref}
                                         
                                        />

                                    </div>)
                                }
                                else if (item.fieldtype === "button") {
                                    return (
                                        <div class="p-3">
                                            <button className={item.className}  >{item.label}</button>
                                        </div>
                                    )
                                }
                                else if (item.fieldtype === "select") {
                                    return (<div class="p-3"><label className="form-label" >{item.label}</label><select className={item.className} onChange={(event) => item.onchange(event)} >
                                        <option value=''></option>
                                        {
                                            item.dataValue.map((it, i) => {
                                                return <option value={it.id}>{it.name}</option>
                                            })
                                        }
                                    </select></div>)
                                }

                            }
                            )
                            }

                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default AddMember;