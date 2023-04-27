
import React, { useRef } from "react";
import AddRecordDatabase from "../DatabaseComponents/AddRecordDatabase"
import AlertMsg from "../Components/AlertMsg"
import MultiSelector from "./MultiSelector";

function CardsInput(CardsInputprops) {

    function handlechange(event) {

        event.preventDefault();
        let addnew = [];

        let checkvalidation = false;

        CardsInputprops.fields.map((item, index) => {

            if (item.required == true && event.target[index].value == "") {
                AlertMsg(item.name + " Missing");
                checkvalidation = true;
                return;
            }
            if (item.fieldtype === "input" || item.fieldtype === "select") {
                addnew[item.name] = "";
                if (event.target[index].value) {
                    addnew[item.name] = event.target[index].value
                }
            }
        })

        if (checkvalidation) {

            return;
        }

        // AddRecordDatabase(CardsInputprops.addnew, CardsInputprops.databasename);



        if (CardsInputprops.reset) {
            CardsInputprops.fields.map((item, index) => {
                if (item.fieldtype === "input")
                    item.ref.current.value = "";
            })
        }


    }



    return (
        <>
            <div className="card">
                <div className={CardsInputprops.className}>
                    {CardsInputprops.headerLabel}
                </div>
                <div className="card-body">

                    <form className="addForm" onSubmit={handlechange} >
                        <div className="div-two  ">

                            {CardsInputprops.fields.map((item, index) => {

                                if (item.fieldtype === "input" && item.readonly == true) {
                                    return (<div className={item.className_div}><label className={item.className_label} >{item.label}</label>
                                        <input className={item.className} type={item.type} name={item.name} placeholder={item.placeholder} ref={item.ref} value={item.value} readOnly />

                                    </div>)
                                }
                                else if (item.fieldtype === "input") {
                                    return (<div className={item.className_div}><label className={item.className_label} >{item.label}</label>
                                        <input className={item.className} type={item.type} name={item.name} placeholder={item.placeholder} ref={item.ref} value={item.value} onChange={(event) => item.onchange(event)} />

                                    </div>)
                                }
                                else if (item.fieldtype === "input" && item.readonly == true) {
                                    return (<div class="p-3"><label className="form-label" >{item.label}</label>
                                        <input className={item.className} type={item.type} name={item.name} placeholder={item.placeholder} ref={item.ref} value={item.value} onChange={(event) => item.onchange(event)} />

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
                                    // return (<></>)
                                    return (<div class="p-3" ><label className="form-label" >{item.label}</label><select name={item.name} className={item.className} onChange={(event) => item.onchange(event)}>
                                        <option value=''></option>
                                        {
                                            item.dataValue.map((it, i) => {
                                                return <option value={it.id}>{it.name}</option>
                                            })
                                        }
                                    </select></div>)
                                }
                                else if (item.fieldtype === "multiselect") {
                                    return (<div class="p-3" ><label className="form-label" >{item.label}</label>
                                        <MultiSelector placeholder={item.placeholder} className={item.className} name={item.name} onChange={item.onchange} dataValue={item.dataValue}/>
                                    </div>)

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

export default CardsInput;