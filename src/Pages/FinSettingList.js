import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import Loading from '../Components/Loading';
import Nav from 'react-bootstrap/Nav';

function FinSettingList(FinSettingList_props) {

    return (
        <>
            <Nav variant="tabs" className="flex-column mb-3" >

                <div className="div-two">
                    <Nav.Item>
                        <Nav.Link href="/finance/settings/rent" className="nav-pricing" active={FinSettingList_props.rentsubpageactivation}> الايجارات</Nav.Link>

                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/finance/settings/marketing" className="nav-pricing" active={FinSettingList_props.marketingsubpageactivation}>تسويق</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/finance/settings/maintenance" className="nav-pricing" active={FinSettingList_props.maintenancesubpageactivation}>تصليحات</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/finance/settings/other" className="nav-pricing" active={FinSettingList_props.othersubpageactivation}>اخرى</Nav.Link>
                    </Nav.Item>




                </div>
            </Nav>
        </>
    )
}

export default FinSettingList;