import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Notebook(Notebook_props) {
    Notebook_props.setpageactivation(true);
    Notebook_props.setsubpageactivation(true);

    return (
        <>
        <PricingList notebooksubpageactivation={Notebook_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Notebook_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Notebook</h3>
                </div>
            </div>
        </>
    )
}

export default Notebook;