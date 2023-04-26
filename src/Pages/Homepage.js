import React , { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import Loading from '../Components/Loading';

function Homepage(home_props)
{


    home_props.setpageactivation(true);
    return (
        <>
       
        <div className="card">
                <div className="card-header">
                    <h3>{home_props.pagename}</h3>
                </div>
                <div className="card-body">


                </div>
        </div>
        </>

    )
}

export default Homepage;