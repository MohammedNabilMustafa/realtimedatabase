import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Folder(Folder_props) {
    Folder_props.setpageactivation(true);
    Folder_props.setsubpageactivation(true);

    return (
        <>
        <PricingList foldersubpageactivation={Folder_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Folder_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Folder</h3>
                </div>
            </div>
        </>
    )
}

export default Folder;