import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Flyer(Flyer_props) {
    Flyer_props.setpageactivation(true);
    Flyer_props.setsubpageactivation(true);

    return (
        <>
        <PricingList flyersubpageactivation={Flyer_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Flyer_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Flyer</h3>
                </div>
            </div>
        </>
    )
}

export default Flyer;