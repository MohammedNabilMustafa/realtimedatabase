import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import DataTable from "react-data-table-component";
import Loading from '../Components/Loading';


function PaperSize(papersize_props) {

    const DatabaseName = "paper_size";
    const DatabaseName1 = "print_type";
    const DatabaseName2 = "paper_type";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const [printType, setPrintType] = React.useState([]);
    const [paperType, setPaperType] = React.useState([]);

    const ref = firebase.firestore().collection(DatabaseName)
    const ref1 = firebase.firestore().collection(DatabaseName1)
    const ref2 = firebase.firestore().collection(DatabaseName2)

    papersize_props.setpageactivation(true);
    papersize_props.titleset(papersize_props.pagename);
    function Empty_func(){}

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
            name: 'نوع الطباعة',
            fieldname: 'printtype_id',
            selector: row => row.printtype_id,
            sortable: true
        },
        {
            name: 'نوع الورق',
            fieldname: 'papertype_id',
            selector: row => row.papertype_id,
            sortable: true
        },

        {
            name: "العدد فى الفرخ",
            fieldname: 'number',
            selector: row => row.number,
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
        number: "",
        width: ""

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
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "name",
        label: "Name",
        placeholder: "ادخل الاسم",
        ref: useRef()
    },
    {
        required: true,
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        dataValue: printType,
        onchange : Empty_func,
        name: "printtype_id",
        label: "نوع الطباعة",
        placeholder: "اختر النوع",
        ref: useRef()
    },
    {
        required: true,
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        dataValue: paperType,
        onchange : Empty_func,

        name: "papertype_id",
        label: "نوع الورق",
        placeholder: "اختر النوع",
        ref: useRef()
    },
    {
        required: true,
        fieldtype: "input",
        className: "form-control mb-3",

        type: "number",
        name: "number",
        label: "العدد فى الفرخ",
        placeholder: "ادخل العدد",
        ref: useRef()
    },
    
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
                let ret = printType.filter((it) => {
                    let check = it.id === saved_data.printtype_id

                    if (check) {
                        saved_data.printtype_id = it.name
                        return check
                    }
                    ;
                })

                let ret1 = paperType.filter((it) => {
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

    function getdatabase2() {

        setLoading(true);
        ref2.onSnapshot((querySnapshot) => {
            const item = [];

            querySnapshot.forEach((doc) => {
                let saved_data = doc.data();
                item.push(
                    {
                        id: doc.id,
                        name: doc.data().name
                    }
                );

            })

            setPaperType(item);
            setLoading(false);
        });

    }

    function getdatabase1() {

        setLoading(true);
        ref1.onSnapshot((querySnapshot) => {
            const item = [];

            querySnapshot.forEach((doc) => {
                let saved_data = doc.data();
                item.push(
                    {
                        id: doc.id,
                        name: doc.data().name
                    }
                );

            })

            setPrintType(item);
            setLoading(false);
        });

    }

    useEffect(() => {
        getdatabase();
    }, [printType , paperType])

    useEffect(() => {
        getdatabase1();
    }, [])

    useEffect(() => {
        getdatabase2();
    }, [])
    
    if (loading) {
        return <Loading />
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
                <h1> {papersize_props.pagename}</h1>
                <button className="btn btn-success mb-3" onClick={() => {

                    setIsOpen(true);
                    setModalContent(
                        <AddMember setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                    );
                }} >+ اضف مقاس</button>
            </div>
            <div className="card-body">

                <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
                <CreateTable setData={setData} data={data} columns={columns_user_table} inside={inside_table_function} />

            </div>

        </div>
    )

}

export default PaperSize;