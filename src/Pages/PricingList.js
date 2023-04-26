import React, { useEffect, useRef, useState } from "react";
import CreateTable from "../Components/CreateTable";
import AddMember from "../Components/AddMember";
import DeleteRecordDatabase from "../DatabaseComponents/DeleteRecordDatabase"
import EditMember from "../Components/EditMember"
import firebase from "../DatabaseComponents/firebase";
import CreateModal from "../Components/CreateModal"
import Loading from '../Components/Loading';
import Nav from 'react-bootstrap/Nav';

function PricingList(PricingList_props) {

    return (
        <>
            <Nav variant="tabs" className="flex-column mb-3" >

                <div className="div-two">
                    <Nav.Item>
                        <Nav.Link href="/pricing/paper" className="nav-pricing" active={PricingList_props.onthersubpageactivation}>ورق غير مصنف</Nav.Link>

                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/ncr" className="nav-pricing" active={PricingList_props.ncrsubpageactivation}>دفاتر</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/flyer" className="nav-pricing" active={PricingList_props.flyersubpageactivation}>فلاير</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/sticker" className="nav-pricing" active={PricingList_props.stickersubpageactivation}>ستيكر</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/card" className="nav-pricing" active={PricingList_props.cardsubpageactivation}>كروت</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link href="/pricing/env" className="nav-pricing" active={PricingList_props.envsubpageactivation}>اظرف</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/notebook" className="nav-pricing" active={PricingList_props.notebooksubpageactivation}>نوت بوك</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/folder" className="nav-pricing" active={PricingList_props.foldersubpageactivation}>فولدر</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link href="/pricing/custom" className="nav-pricing" active={PricingList_props.customsubpageactivation}>منتج جديد</Nav.Link>
                    </Nav.Item>



                </div>
            </Nav>
        </>
    )
}

export default PricingList;