import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import DataTable from "react-data-table-component";
import Loading from '../Components/Loading';


function PaperWeight(paperweight_props) {

    const DatabaseName = "paper_weight";
    const DatabaseName1 = "paper_type";
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const [papertype, setPapertype] = React.useState([]);

    paperweight_props.setpageactivation(true);
    paperweight_props.titleset(paperweight_props.pagename);

    function Empty_func() {}

    const columns_user_table = [
        {
            name: 'التاريخ',
            fieldname: 'timestamp',
            selector: row => row.timestamp,
            sortable: true
        },
        {
            name: 'نوع الورق',
            fieldname: 'papertype_id',
            selector: row => row.papertype_id,
            sortable: true,
        },
        {
            name: 'الوزن',
            fieldname: 'weight',
            selector: row => row.weight,
            sortable: true
        },
        {
            name: 'السعر',
            fieldname: 'price',
            selector: row => row.price,
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
        papertype_id: "",
        weight: "",
        price: ""
        
    }
    const input_fields_user_table = [{
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "date",
        name: "timestamp",
        label: "Timestamp",

        placeholder: "ادخل التاريخ",
        ref: useRef()
    }
        , {
        required: true,
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        dataValue: papertype,
        onchange:Empty_func,
        name: "papertype_id",
        label: "Paper Type",
        placeholder: "اختر النوع",
        ref: useRef()
    },
    {
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "number",
        name: "weight",
        label: "Paper Weight",
        placeholder: "ادخل الوزن",
        ref: useRef()
    },
    {
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",
        type: "number",
        name: "price",
        label: "سعر الورق",
        placeholder: "ادخل السعر",
        ref: useRef()
    },
    {
        fieldtype: "button",
        className: "btn btn-primary mb-3",
        label: "اضف"
    }
    ]


    const ref1 = firebase.firestore().collection(DatabaseName1);
    const ref = firebase.firestore().collection(DatabaseName)


    function getdatabase1() {
        // setLoading(true);

        ref1.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;
                item.push(
                    {
                        id: saved_data.id,
                        name: saved_data.data().name
                    }
                );

            })
            setPapertype(item);

        });
        // setLoading(false);
    }

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
                    <button className="btn btn-danger " onClick={() => DeleteRecordDatabase(doc, DatabaseName)} >مسح</button>

                </div>;
                let ret = papertype.filter((it) => {
                    let check = it.id === saved_data.papertype_id

                    if (check) {
                        saved_data.papertype_id = it.name
                        return check
                    }
                    ;
                })


                item.push(saved_data);
            })
            setData(item);

            setLoading(false);

        });
    }

    useEffect(() => {
        getdatabase();
    }, [papertype])

    useEffect(() => {
        getdatabase1();

    }, [])

    if(loading){
        return <Loading  />
    }



    function inside_table_function(inside_data) {
        const data_tabel = [
            {
                name: 'الصلاحيات',
                selector: row => row.role,
                sortable: true
            },
            {
                name: 'العنوان',
                selector: row => row.address,
                sortable: true
            },
            {
                name: 'الموقع',
                selector: row => row.location,
                sortable: true
            },
            {
                name: 'كلمة السر',
                selector: row => row.password,
                sortable: true
            }

        ]

        return (
            <div>
                {/* <DataTable  className="table_style"
                    columns={data_tabel}
                    data = {[inside_data]}
                    
                ></DataTable>  */}

            </div>)
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1> {paperweight_props.pagename}</h1>
                <button className="btn btn-success mb-3" onClick={() => {

                    setIsOpen(true);
                    setModalContent(
                        <AddMember setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                    );
                }} >+ اضف وزن</button>
            </div>
            <div className="card-body">
                <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
                <CreateTable limit={3} setData={setData} data={data} columns={columns_user_table} inside={inside_table_function} />

            </div>

        </div>
    )

}

export default PaperWeight;