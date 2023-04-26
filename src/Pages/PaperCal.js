import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import DataTable from "react-data-table-component";
import Loading from '../Components/Loading';


function PaperCal(papertype_props) {

    const DatabaseName = "paper_cal";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');

    const ref = firebase.firestore().collection(DatabaseName)

    papertype_props.setpageactivation(true);
    papertype_props.titleset(papertype_props.pagename);


    function Empty_func() {

    }

    const columns_user_table = [
        {
            name: 'التاريخ',
            fieldname: 'timestamp',
            selector: row => row.timestamp,
            sortable: true
        },
        {
            name: 'الاسم',
            fieldname: 'name',
            selector: row => row.name,
            sortable: true
        },
        {
            name: 'المعادلة',
            fieldname: 'cal_way',
            selector: row => row.cal_way,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => row.Action,
            sortable: true
        }

    ]

    const input_fields_add_user_table = {
        timestamp: "",
        name: "",
        cal_way: "",
    }
    const input_fields_user_table = [{
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "date",
        name: "timestamp",
        label: "التاريخ",
        placeholder: "ادخل التاريخ",
        ref: useRef()
    }
        , {
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "name",
        label: "الاسم",
        placeholder: "ادخل الاسم",
        ref: useRef()
    }
    , 
    
    {
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "cal_way",
        label: "المعادلة",
        placeholder: "ادخل المعادلة",
        ref: useRef()
    }
    ,
    {
        fieldtype: "button",
        className: "btn btn-primary mb-3",
        label: "اضف"
    }
    ]



    function getdatabase() {

        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const item = [];

            querySnapshot.forEach((doc) => {
                let saved_data = doc.data();
                saved_data.Action = <div className="btnstyle">
                    <button className="btn btn-primary " onClick={() => {

                        setIsOpen(true);
                        setModalContent(
                            <EditMember setIsOpen={setIsOpen} setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={doc} saved_data={saved_data} />
                        );

                    }} >مزيد</button>
                    <button className="btn btn-danger  " onClick={() => DeleteRecordDatabase(doc, DatabaseName)} >مسح</button>

                </div>;
                item.push(saved_data);
            })
            setData(item);
            setLoading(false);
        });

    }

    useEffect(() => {
        getdatabase();
    }, [])


    if(loading){
        return <Loading  />
    }



    function inside_table_function(inside_data) {

        const data_tabel = [
            {
                name: 'المعادلة',
                selector: row => row.cal_way,
                sortable: true
            }

        ]

        return (
            <div>
                <DataTable  className="table_style"
                    columns={data_tabel}
                    data = {[inside_data]}
                    
                ></DataTable> 

            </div>)
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1> {papertype_props.pagename}</h1>
                <button className="btn btn-success mb-3" onClick={() => {

                    setIsOpen(true);
                    setModalContent(
                        <AddMember setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                    );
                }} >+ اضف نوع</button>
            </div>
            <div className="card-body">

                <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
                <CreateTable setData={setData} data={data} columns={columns_user_table} inside={inside_table_function} />

            </div>

        </div>
    )

}

export default PaperCal;