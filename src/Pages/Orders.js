import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Orders(Order_props) {

    Order_props.setpageactivation(true);

    return (
        <>
            <div className="card">
                <div className="card-header">
                    <h3>{Order_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Orders</h3>
                </div>
            </div>
        </>
    )
}

export default Orders;