
import React, { useEffect } from "react";
import DataTable from "react-data-table-component";

function CreateTable(create_props) {
    const [data, setData] = React.useState(create_props.data);
    const [filterfield, filterfieldtData] = React.useState(create_props.columns);
    const [saved_index, serSaved_index] = React.useState(0);
    function handlefilter(event) {
        event.preventDefault();
        const newData = data.filter(row => {

            if(row[event.target[0].value])
            {
                return row[event.target[0].value].toLowerCase().includes(event.target[1].value.toLowerCase())
            }
            else
            {
                return ;
            }

        })

        setData(newData);
    }

    function handlefilter_reset(event) {


        event.preventDefault();

        setData(create_props.data);

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
                                    <select className="form-control mb-3" placeholder="Select Field">
                                        {
                                            filterfield.map((item, index) => {
                                                if (item.fieldname)
                                                    return (<option value={item.fieldname}>{item.name}</option>)
                                            }
                                            )
                                        }

                                    </select>
                                </div>
                                <div className="p-3 name">

                                    <label for="floatingInput" className="form-label">ادخل كلمة البحث</label>
                                    <input className="form-control mb-3" type='text' placeholder="ادخل كلمة البحث" />
                                </div>
                                <div className="p-3">

                                    <button className="btn btn-primary mb-3" >بحث</button>
                                </div>

                            </div>

                        </form>

                        <form onSubmit={handlefilter_reset}>

                            <div className="p-3">

                                <button className="btn btn-danger mb-3" >اعادة</button>
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