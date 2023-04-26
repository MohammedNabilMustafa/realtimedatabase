import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import DataTable from "react-data-table-component";
import Loading from '../Components/Loading';


function FinTransation(fintransations_props) {

    const DatabaseName = "fin_transations";
    const DatabaseName_order = "orders";
    const DatabaseName_material_salaries = "users";
    const DatabaseName_rent = "rent";
    const DatabaseName_maintenance = "maintenance";
    const DatabaseName_marketing = "marketing";
    const DatabaseName_other = "other";

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');

    const [materialtype, setMaterialtype] = React.useState('');
    const [materialdetails, setMaterialdetails] = React.useState([]);

    const [ordersSelect, setOrdersSelect] = React.useState([]);
    const [materialSelect, setMaterialSelect] = React.useState([]);
    const [salarySelect, setSalarySelect] = React.useState([]);
    const [rentSelect, setRentSelect] = React.useState([]);
    const [maintenanceSelect, setMaintenanceSelect] = React.useState([]);
    const [marketingSelect, setMarketingSelect] = React.useState([]);
    const [otherSelect, setOtherSelect] = React.useState([]);

    const ref = firebase.firestore().collection(DatabaseName);
    const ref_orders = firebase.firestore().collection(DatabaseName_order);
    const ref_material_salaries = firebase.firestore().collection(DatabaseName_material_salaries);
    const ref_rent = firebase.firestore().collection(DatabaseName_rent);
    const ref_maintenance = firebase.firestore().collection(DatabaseName_maintenance);
    const ref_marketing = firebase.firestore().collection(DatabaseName_marketing);
    const ref_other = firebase.firestore().collection(DatabaseName_other);

    fintransations_props.setpageactivation(true);
    fintransations_props.titleset(fintransations_props.pagename);


    function Empty_func() {

    }

    function Material_details_func(event) {

        if (event.target.value == "Orders") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = ordersSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }


        }
        else if (event.target.value == "Material") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = materialSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }

        }
        else if (event.target.value == "Salary") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = salarySelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }

        }
        else if (event.target.value == "Rent") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = rentSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }

        }
        else if (event.target.value == "Maintenance") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = maintenanceSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }
        }
        else if (event.target.value == "Marketing") {

            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = marketingSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }

        }
        else if (event.target.value == "Other") {


            let saved_data = input_fields_user_table;
            saved_data[5].dataValue = otherSelect;
            if (event.doc) {
                setModalContent(
                    <EditMember setIsOpen={setIsOpen} setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={event.doc} saved_data={event.doc.data()} />
                )
            }
            else {
                setModalContent(
                    <AddMember setData={setData} fields={saved_data} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                )
            }

        }

    }

    const columns_user_table = [
        {
            name: 'التاريخ',
            fieldname: 'timestamp',
            selector: row => row.timestamp,
            sortable: true
        }
        ,
        {
            name: 'تفصيل النوع',
            fieldname: 'subtype',
            selector: row => row.subtype,
            sortable: true
        }
        ,
        {
            name: 'حالة',
            fieldname: 'remainStatus',
            selector: row => row.remainStatus,
            sortable: true,
        }
        
        ,
        {
            name: 'متبقى',
            fieldname: 'remain',
            selector: row => row.remain,
            sortable: true,
        }
        ,
        {
            name: 'نوع المعاملة',
            fieldname: 'transaction',
            selector: row => row.transaction,
            sortable: true
        }
        ,
        {
            name: 'Action',
            selector: row => row.Action,
            sortable: true,

        }
        ,
        {
            name: 'التكلفة',
            fieldname: 'cost',
            selector: row => row.cost,
            sortable: true,
            hide: 10000

        }
        ,
        {
            name: 'النوع',
            fieldname: 'type',
            selector: row => row.type,
            sortable: true,
            hide: 10000

        }
        
        
        ,
        {
            name: 'تعليق',
            fieldname: 'comment',
            selector: row => row.comment,
            sortable: true,
            hide: 10000
        }
        
        ,
        {
            name: 'المدفوع',
            fieldname: 'paid',
            selector: row => row.paid,
            sortable: true,
            hide: 10000

        },
        {
            name: 'المستحق',
            fieldname: 'fees',
            selector: row => row.fees,
            sortable: true,
            hide: 10000

        }

       
    ]

    const input_fields_add_user_table = {
        timestamp: "",
        fees: "",
        paid: "",
        cost: "",
        type: "",
        subtype: "",
        transaction: "",
        comment: ""

    }

    const input_fields_user_table = [
        {
            required: true,
            fieldtype: "input",
            className: "form-control mb-3",
            type: "date",
            name: "timestamp",
            label: "التاريخ",
            placeholder: "ادخل التاريخ",
            ref: useRef()
        }
        ,
        {
            required: true,
            fieldtype: "input",
            className: "form-control mb-3",
            type: "number",
            name: "fees",
            label: "المستحق",
            placeholder: "ادخل المستحق",
            ref: useRef()
        }
        ,
        {
            required: true,
            fieldtype: "input",
            className: "form-control mb-3",
            type: "number",
            name: "paid",
            label: "المدفوع",
            placeholder: "ادخل المدفوع",
            ref: useRef()
        }
        ,
        {
            required: true,
            fieldtype: "input",
            className: "form-control mb-3",
            type: "number",
            name: "cost",
            label: "التكلفة",
            placeholder: "ادخل التكلفة",
            ref: useRef()
        }
        ,
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "type",
            label: "نوع المعاملة",
            dataValue: [
                { id: "Order", name: "Order" },
                { id: "Material", name: "Material" },
                { id: "Salary", name: "Salary" },
                { id: "Rent", name: "Rent" },
                { id: "Maintenance", name: "Maintenance" },
                { id: "Marketing", name: "Marketing" },
                { id: "Other", name: "Other" }

            ],
            onchange: Material_details_func,
            placeholder: "المعاملة",
            ref: useRef()
        }
        ,
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "subtype",
            label: "تفصيل المعاملة",
            dataValue: materialdetails,
            onchange: Empty_func,
            placeholder: "المعاملة",
            ref: useRef()
        }
        ,
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "transaction",
            label: "نوع المعاملة",
            dataValue:
                [
                    { id: "IN", name: "IN" },
                    { id: "OUT", name: "OUT" }
                ]
            ,
            onchange: Empty_func,
            placeholder: "المعاملة",
            ref: useRef()
        }
        ,
        {
            required: false,
            fieldtype: "input",
            className: "form-control mb-3",
            type: "text",
            name: "comment",
            label: "تعليق",
            placeholder: "ادخل تعليق",
            ref: useRef()
        }
        ,
        {
            fieldtype: "button",
            className: "btn btn-primary mb-3",
            label: "اضف"
        }
    ];

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
                            <EditMember set_once={true} setIsOpen={setIsOpen} setData={setData} fields={input_fields_user_table}
                                addnew={input_fields_add_user_table} databasename={DatabaseName} doc={doc} saved_data={saved_data}
                                setModalContent={setModalContent} ordersSelect={ordersSelect} materialSelect={materialSelect} salarySelect={salarySelect}
                                rentSelect={rentSelect} maintenanceSelect={maintenanceSelect} marketingSelect={marketingSelect} otherSelect={otherSelect} />
                        );


                    }} >مزيد</button>
                    <button className="btn btn-danger  " onClick={() => DeleteRecordDatabase(doc, DatabaseName)} >مسح</button>

                </div>;


                ordersSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                materialSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                salarySelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                rentSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                maintenanceSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                marketingSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                otherSelect.filter((it) => {
                    let check = it.id === saved_data.subtype

                    if (check) {
                        saved_data.subtype = it.name
                        return check
                    }
                    ;
                })

                saved_data.remain = Number(saved_data.fees) - Number(saved_data.paid)
                if(saved_data.remain > 0)
                {
                    saved_data.remainStatus = "غير مكتمل"
                }
                else if(saved_data.remain < 0)
                {
                    saved_data.remainStatus = "خطأ"
                }
                else
                {
                    saved_data.remainStatus = "مدفوع"
                }

                item.push(saved_data);

            })

            setData(item);
            setLoading(false);
        });


    }


    function getdatabase_orders() {

        ref_orders.onSnapshot((querySnapshot) => {
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
            setOtherSelect(item);

        });
    }

    function getdatabase_material_salaries() {

        ref_material_salaries.onSnapshot((querySnapshot) => {
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
            setMaterialSelect(item);

        });
    }

    function getdatabase_rent() {

        ref_rent.onSnapshot((querySnapshot) => {
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
            setRentSelect(item);

        });
    }

    function getdatabase_maintenance() {

        ref_maintenance.onSnapshot((querySnapshot) => {
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
            setMaintenanceSelect(item);

        });
    }

    function getdatabase_marketing() {

        ref_marketing.onSnapshot((querySnapshot) => {
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
            setMarketingSelect(item);

        });
    }

    function getdatabase_other() {

        ref_other.onSnapshot((querySnapshot) => {
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
            setOtherSelect(item);

        });
    }




    useEffect(() => {
        getdatabase();
    }, [ordersSelect, materialSelect, salarySelect, rentSelect
        , maintenanceSelect, marketingSelect, otherSelect, materialdetails])

    useEffect(() => {
        getdatabase_orders();
    }, [])

    useEffect(() => {
        getdatabase_rent();
    }, [])

    useEffect(() => {
        getdatabase_material_salaries();
    }, [])

    useEffect(() => {
        getdatabase_maintenance();
    }, [])

    useEffect(() => {
        getdatabase_marketing();
    }, [])

    useEffect(() => {
        getdatabase_other();
    }, [])

    if (loading) {
        return <Loading />
    }



    function inside_table_function(inside_data) {

        const data_tabel = [
            {
                name: 'type',
                fieldname: 'نوع',
                selector: row => row.type,
                sortable: true
            }
            ,
            {
                name: 'المستحق',
                fieldname: 'fees',
                selector: row => row.fees,
                sortable: true
            }
            ,
            {
                name: 'المدفوع',
                fieldname: 'paid',
                selector: row => row.paid,
                sortable: true
            }
            ,
            {
                name: 'التكلفة',
                fieldname: 'cost',

                selector: row => row.cost,
                sortable: true
            }
            ,
            {
                name: 'التعليق',
                fieldname: 'comment',

                selector: row => row.comment,
                sortable: true
            }
        ]


        return (
            <div>
                <div className="card" >
                    <div className="card-body" >
                        <DataTable className="table_style"

                            columns={data_tabel}
                            data={[inside_data]}

                        ></DataTable>
                    </div>
                </div>
            </div>)
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1> {fintransations_props.pagename}</h1>
                <button className="btn btn-success mb-3" onClick={() => {

                    setIsOpen(true);
                    setModalContent(
                        <AddMember setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                    );
                }} >+ اضف معاملة</button>
            </div>
            <div className="card-body">

                <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
                <CreateTable setData={setData} data={data} subcolumns={columns_user_table} columns={columns_user_table} inside={inside_table_function} />

            </div>

        </div>
    )

}

export default FinTransation;