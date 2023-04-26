import React , { useEffect, useRef, useState } from "react";
import { Dropdown } from 'primereact/dropdown';

export default function DropDownField(props) {

    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countries , setCountries] = useState(props.data);


    useEffect(() => {
        setCountries(props.data);
    }, [props.data])
    
    const selectedCountryTemplate = (option, props) => {
        if (option) {
            return (
                <div className="flex align-items-center">
                    <div>{option.name}</div>
                </div>
            );
        }

        return <span>{props.placeholder}</span>;
    };

    const countryOptionTemplate = (option) => {
        return (
            <div className="flex align-items-center">
                <div>{option.name}</div>
            </div>
        );
    };



    return (
        <div>
            <Dropdown value={selectedCountry} onChange={(e)=>{
                setSelectedCountry(e.value)
                if( props.onChange)
                {
                    props.onChange(e)
                }
            }} options={countries} optionLabel="name" placeholder= {props.placeholder} 
                filter valueTemplate={selectedCountryTemplate} itemTemplate={countryOptionTemplate}  />
        </div>    
    )
}
        
