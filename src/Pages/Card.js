import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Card(Card_props) {
    Card_props.setpageactivation(true);
    Card_props.setsubpageactivation(true);

    return (
        <>
        <PricingList cardsubpageactivation={Card_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Card_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Card</h3>
                </div>
            </div>
        </>
    )
}

export default Card;