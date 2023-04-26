import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";

function Sticker(Sticker_props) {
    Sticker_props.setpageactivation(true);
    Sticker_props.setsubpageactivation(true);

    return (
        <>
        <PricingList stickersubpageactivation={Sticker_props.subpageactivation}/>

            <div className="card">
                <div className="card-header">
                    <h3>{Sticker_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <h3>Sticker</h3>
                </div>
            </div>
        </>
    )
}

export default Sticker;