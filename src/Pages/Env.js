import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Env(Env_props) {
    Env_props.setpageactivation(true);
    Env_props.setsubpageactivation(true);

    return (
        <>
        <PricingList envsubpageactivation={Env_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Env_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Env</h3>
                </div>
            </div>
        </>
    )
}

export default Env;