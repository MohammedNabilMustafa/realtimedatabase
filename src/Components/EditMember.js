
import firebase from "../DatabaseComponents/firebase";
import EditRecordDatabase from "../DatabaseComponents/EditRecordDatabase";
import React, { useEffect, useRef, useState } from "react";
import AlertMsg from "../Components/AlertMsg"

function EditMember(editMembeprops) {

    if(editMembeprops.set_once)
    {

        console.log(editMembeprops.doc.data().type);
        
        if (editMembeprops.doc.data().type == "Orders") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.ordersSelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
        }
        else if (editMembeprops.doc.data().type == "Rent") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.rentSelect;
            editMembeprops.setModalContent(
                    <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
                    )


        }

        else if (editMembeprops.doc.data().type == "Material") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.materialSelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
            ;

        }

        else if (editMembeprops.doc.data().type == "Salary") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.salarySelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
            ;
        }

        else if (editMembeprops.doc.data().type == "Maintenance") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.maintenanceSelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
            ;

        }
        else if (editMembeprops.doc.data().type == "Marketing") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.marketingSelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
            ;

        }
        else if (editMembeprops.doc.data().type == "Other") {

            let saved_data = editMembeprops.fields;
            saved_data[5].dataValue = editMembeprops.otherSelect;
            editMembeprops.setModalContent(
                <EditMember  setIsOpen={editMembeprops.setIsOpen} setData={editMembeprops.setData} fields={saved_data} addnew={editMembeprops.addnew} databasename={editMembeprops.databasename} doc={editMembeprops.doc} saved_data={editMembeprops.doc.data()} />
            )
            ;

        }
    }

    function edithandler(event) {

        event.preventDefault();

        let checkvalidation = false;

        editMembeprops.fields.map((item, index) => {

            if (item.required == true && event.target[index + 1].value == "") {
                AlertMsg(item.label + " Missing");
                checkvalidation = true;
                return;
            }

            if (item.fieldtype === "input" || item.fieldtype === "select") {
                editMembeprops.addnew[item.name] = "";
                if (event.target[index + 1].value) {
                    editMembeprops.addnew[item.name] = event.target[index + 1].value
                }
            }
        })

        if (checkvalidation) {

            return;
        }
        EditRecordDatabase(editMembeprops, event.target[0].value);
    }



    return (
        <>
            <div className="card">
                <div className="card-header">
                    تعديل جديد
                </div>
                <div className="card-body">
                    <form className="addForm" onSubmit={edithandler} >
                    <div className="div-two  ">

                            <div class="p-3">
                                <label className="form-label" >ID</label>
                                <input className="form-control mb-3" name="databaseID" value={editMembeprops.doc.id} readOnly />
                                
                            </div>
                            {editMembeprops.fields.map((item, index) => {


                                if (item.fieldtype === "input") {
                                    return (<div class="p-3">
                                        <label className="form-label" >{item.label}</label>
                                        <input step="0.1" className={item.className} type={item.type} name={item.name} placeholder={item.placeholder} defaultValue={editMembeprops.doc.data()[item.name]} />
                                        
                                    </div>)
                                }
                                else if (item.fieldtype === "button") {
                                    return (
                                        <div class="p-3">
                                        <button className={item.className}  >تعديل</button>
                                        </div>
                                    )
                                }
                                else if (item.fieldtype === "select") {
                                    if (item.dataValue) {
                                        return (<div class="p-3"><label className="form-label" >{item.label}</label><select className={item.className} onChange={(event) =>
                                            {
                                                event.doc = editMembeprops.doc;
                                                item.onchange(event)
                                            }
                                         } > 
                                            {

                                                item.dataValue.map((it, i) => {

                                                    if (it.id == editMembeprops.doc.data()[item.name] && editMembeprops.doc.data()[item.name] != undefined) {
                                                        return <option value={it.id}>{it.name} </option>;
                                                    }

                                                })

                                            }
                                            <option value=""> </option>
                                            {
                                                item.dataValue.map((it, i) => {

                                                    if (it.id != editMembeprops.doc.data()[item.name]) {
                                                        return <option value={it.id}>{it.name} </option>;
                                                    }
                                                })
                                            }
                                        </select></div>)
                                    }
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

export default EditMember;