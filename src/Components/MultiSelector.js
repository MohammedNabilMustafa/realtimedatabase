import React, { useState } from "react";
import { MultiSelect } from 'primereact/multiselect';

export default function MultiSelector(props) {
    const [selectedCities, setSelectedCities] = useState(null);


    return (
        <div className=" flex justify-content-center">
            <MultiSelect value={selectedCities} onChange={(e) => {
                setSelectedCities(e.value)
                if(props.onChange)
                {
                    props.onChange(e);
                }
            }} options={props.dataValue} optionLabel="name" display="chip"
            filter placeholder={props.placeholder} maxSelectedLabels={3}  />



        </div>
    );
}
        