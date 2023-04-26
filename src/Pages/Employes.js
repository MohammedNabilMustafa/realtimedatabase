import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import DataTable from "react-data-table-component";
import Loading from '../Components/Loading';


function Employes(users_props) {
    const saved_filter = "موظف"
    const DatabaseName = "users";
    const DatabaseName1 = "roles";
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [modalContent, setModalContent] = React.useState('');
    const [roles, setRoles] = React.useState([]);

    const [filter_database, setFilter_database] = React.useState([{ id: '', name: '' }]);

    const ref = firebase.firestore().collection(DatabaseName)
    const ref1 = firebase.firestore().collection(DatabaseName1)

    users_props.setpageactivation(true);
    users_props.titleset(users_props.pagename);

    function Empty_func(){}

    const columns_user_table = [{
        name: 'الاسم',
        fieldname: 'name',
        selector: row => row.name,
        sortable: true
    },
    {
        name: 'الهاتف',
        fieldname: 'phone',
        selector: row => row.phone,
        sortable: true
    },
    {
        name: 'البريد',
        fieldname: 'email',
        selector: row => row.email,
        sortable: true
    },
    {
        name: 'اسم المستخدم',
        fieldname: 'username',
        selector: row => row.username,
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
        phone: "",
        email: "",
        username: "",
        password: "",
        address: "",
        role: "",
        location: "",
        position: "",
        firstcalldate: ""
    }
    const input_fields_user_table = [{
        fieldtype: "input",
        className: "form-control mb-3",
        type: "date",
        name: "timestamp",
        label: "Timestamp",
        placeholder: "ادخل التاريخ",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "name",
        label: "Name",
        placeholder: "ادخل الاسم",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "phone",
        label: "Phone",
        placeholder: "ادخل الهاتف",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "email",
        label: "Email",
        placeholder: "ادخل البريد",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "username",
        label: "Username",
        placeholder: "ادخل اسم المستخدم",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "password",
        label: "Password",
        placeholder: "ادخل كلمة السر",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "address",
        label: "Address",
        placeholder: "ادخل العنوان",
        ref: useRef()
    }
        , {
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        name: "role",
        label: "Role",
        dataValue: roles,
        onchange : Empty_func,
        placeholder: "اختر الصلاحيات",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        type: "text",
        name: "location",
        label: "Location",
        placeholder: "ادخل الموقع",
        ref: useRef()
    }


        , {
        fieldtype: "button",
        className: "btn btn-primary mb-3",
        label: "اضف"
    }
    ]




    function getdatabase1() {
        setLoading(true);

        ref1.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;

                if(saved_data.data().name == saved_filter)
                {
                    item.push(
                        {
                            id: saved_data.id,
                            name: saved_data.data().name
                        }
                    );
                }


            })

            setRoles(item);
        });
        // setLoading(false);
    }

    function getdatabase() {

        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const item = [];

            querySnapshot.forEach((doc) => {
                let saved_data = doc.data();
                saved_data.Action = < >
                    <button className=" btn btn-primary" onClick={() => {

                        setIsOpen(true);
                        setModalContent(
                            <EditMember setIsOpen={setIsOpen} setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} doc={doc} saved_data={saved_data} />
                        );

                    }} >مزيد</button>
                    <button className=" btn btn-danger  " onClick={() => DeleteRecordDatabase(doc, DatabaseName)} >مسح</button>
                </>;

                let ret = roles.filter((it) => {
                    let check = (it.id === saved_data.role && it.name == saved_filter)

                    if (check) {
                        saved_data.role = it.name
                        return check
                    }
                    ;
                })
                if(ret.length)
                {
                    item.push(saved_data);
                }

            })

            setData(item);
            setLoading(false);
        });

    }

    useEffect(() => {
        getdatabase();
    }, [roles   ])


    useEffect(() => {
        getdatabase1();
    }, [ ])

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
                <DataTable className="table_style"
                    columns={data_tabel}
                    data={[inside_data]}

                ></DataTable>

            </div>)
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1> {users_props.pagename}</h1>
                <button className="btn btn-success mb-3" onClick={() => {
                    setIsOpen(true);
                    setModalContent(
                        <AddMember setData={setData} fields={input_fields_user_table} addnew={input_fields_add_user_table} databasename={DatabaseName} reset={false} />
                    );
                }} >+ اضف مستخدم</button>
            </div>
            <div className="card-body">

                <CreateModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} modalContent={modalContent} />
                <CreateTable limit={3} setData={setData} data={data} columns={columns_user_table} inside={inside_table_function} />

            </div>


        </div>
    )

}

export default Employes;