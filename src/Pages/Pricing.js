import React, { useEffect, useRef, useState } from "react";

import "@fontsource/cairo";
import PricingList from "./PricingList";


function Pricing(pricing_props) {

    pricing_props.setpageactivation(true);
   

    return (
        <>
        
        <PricingList />

            <div className="card" >
                <div className="card-header">
                    <h3>{pricing_props.pagename}</h3>
                </div>
                <div className="card-body">
                        <h3>اختر منتج</h3>
                </div>


            </div>
        </>
    )

}

export default Pricing;