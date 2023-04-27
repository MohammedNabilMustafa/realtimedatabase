import React, { useState } from "react";
import { Checkbox } from "primereact/checkbox";

export default function CheckBox(props) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="flex justify-content-center">
            <Checkbox onChange={(e) => {
                setChecked(e.checked)
                if(props.onChange)
                {
                    props.onChange(e);
                }
                }} checked={checked}></Checkbox>
        </div>
    )
}