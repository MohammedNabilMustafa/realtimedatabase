import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Custom(Custom_props) {
    Custom_props.setpageactivation(true);
    Custom_props.setsubpageactivation(true);

    return (
        <>
        <PricingList customsubpageactivation={Custom_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Custom_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Custom</h3>
                </div>
            </div>
        </>
    )
}

export default Custom;