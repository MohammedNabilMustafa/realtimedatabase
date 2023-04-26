import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Ncr(Ncr_props) {
    Ncr_props.setpageactivation(true);
    Ncr_props.setsubpageactivation(true);

    return (
        <>
        <PricingList ncrsubpageactivation={Ncr_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Ncr_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>NCR</h3>
                </div>
            </div>
        </>
    )
}

export default Ncr;