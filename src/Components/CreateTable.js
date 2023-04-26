
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";
import DropDownField from "../Components/DropDownField";


function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
}

function CreateTable(create_props) {
    const [data, setData] = React.useState(create_props.data);
    const [filterfield, filterfieldtData] = React.useState(create_props.columns);
    const [select_search, setSelect_search] = React.useState([{}]);

    function get_uniq_arr(event) {
        let arr_saved = [];
        let arr_saved_index = 0;

        data.map((item, index) => {

            if (event.target.value.fieldname) {
                arr_saved[arr_saved_index] = item[event.target.value.fieldname] ;
                arr_saved_index++;
            }

        }
        )

        let obj = [];

        arr_saved.filter(onlyUnique).map((item, index) => {
            obj[index] = { id: event.target.value.fieldname, name: item };
        })

        setSelect_search(obj);
    }

    function handlefilter(event) {
        event.preventDefault();

        const newData = create_props.data.filter(row => {
            console.log(event.target.value);


            if (row[event.target.value.id] && !Number(row[event.target.value.id]) ) {
                return row[event.target.value.id].toLowerCase().includes(event.target.value.name.toLowerCase())
            }
            else {
                return;
            }

        })
        setData(newData);
    }

    function handlefilter_reset(event) {
        event.preventDefault();
        setData(create_props.data);
        setSelect_search([{}]);
    }

    useEffect(() => {
        setData(create_props.data);
    }, [create_props.data])

    const ExpandedComponent = ({ data }) => create_props.inside(data);

    <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" defaultValue={localStorage.getItem("react_user_phone")} readOnly />
        <label for="floatingInput">Phone</label>
    </div>


    return (
        <>
            <div className="text-end ">

                <div className="card">
                    <div className="div-two">
                        <form onSubmit={handlefilter}>
                            <div className="div-two">

                                <div className="p-3">
                                    <label for="floatingInput" className="form-label">ادخل نوع البحث</label>
                                    <DropDownField data={filterfield} onChange={get_uniq_arr} placeholder={"Select"}/>

                                    {/* <select className="form-control mb-3" placeholder="Select Field" onChange={get_uniq_arr}>
                                    <option value=""></option>
                                        {
                                            
                                            filterfield.map((item, index) => {
                                                if (item.fieldname)
                                                    return (<option value={item.fieldname}>{item.name}</option>)
                                            }
                                            )
                                        }

                                    </select> */}
                                </div>
                                {/* <div className="p-3 name">

                                    <label for="floatingInput" className="form-label">ادخل كلمة البحث</label>
                                    <input className="form-control mb-3" type='text' placeholder="ادخل كلمة البحث" />
                                </div> */}
                                <div className="p-3 name">

                                    <label for="floatingInput" className="form-label">ادخل كلمة البحث</label>
                                    <DropDownField data={select_search} onChange={handlefilter} placeholder={"Select"}/>

                                    {/* <select className="form-control mb-3">
                                    <option value=""></option>
                                        {
                                            select_search.map((item, index) => {
                                                
                                                    return (<option value={item.id}>{item.name}</option>)
                                            }
                                            )
                                        }
                                    </select> */}
                                </div>

                                {/* <div className="p-3">

                                    <button className="btn btn-primary mb-3" >بحث</button>
                                </div> */}

                            </div>

                        </form>

                        <form onSubmit={handlefilter_reset}>

                            <div className="p-3">

                                <button className="btn btn-danger mb-3" >كل النتائج</button>
                            </div>


                        </form>
                    </div>
                </div>

                <div className="card">

                    <DataTable
                        columns={create_props.columns}
                        data={data}
                        selectableRows
                        pagination
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}

                    ></DataTable>
                </div>
            </div>
        </>
    );

}

export default CreateTable;