import React, { useEffect, useRef, useState } from "react";

import "@fontsource/cairo";
import FinSettingList from "./FinSettingList";


function FinSettings(finsettings_props) {

    finsettings_props.setpageactivation(true);
    finsettings_props.titleset(finsettings_props.pagename);


    return (
        <>
        
        <FinSettingList />

            <div className="card" >
                <div className="card-header">
                    <h3>{finsettings_props.pagename}</h3>
                </div>
                <div className="card-body">
                        <h3>اختر الاعدادات</h3>
                </div>


            </div>
        </>
    )

}

export default FinSettings;