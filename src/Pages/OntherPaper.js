import React, { useEffect, useRef, useState } from "react";
import PricingList from "./PricingList";
import CardsInput from "../Components/CardsInput";
import firebase from "../DatabaseComponents/firebase";
import { Margin } from "@mui/icons-material";
import PaperWeight from "./PaperWeight";

function OntherPaper(OntherPaper_props) {

    const DatabaseName_print_type = "print_type";
    const DatabaseName_paper_type = "paper_type";
    const DatabaseName_paper_weight = "paper_weight";
    const DatabaseName_paper_size = "paper_size";
    const DatabaseName_paper_cal = "paper_cal";
    const DatabaseName_cover_type = "cover_type";

    const [checkprintType, setCheckprintType] = React.useState("");
    const [checkpaperType, setCheckpaperType] = React.useState("");


    const [Printtype, setPrinttype] = React.useState([]);
    const [Papersize, setPapersize] = React.useState([]);
    const [Papertype, setPapertype] = React.useState([]);
    const [Paperweight, setPaperweight] = React.useState([]);
    const [Papercal, setPapercal] = React.useState([]);
    const [CoverTpye, setCoverTpye] = React.useState([]);


    const [paperInfo, setPaperInfo] = React.useState(
        {
            Name: "",
            PrintType: [{ id: '', name: '', equation: '', price: '' }],
            PaperSize: { id: '', name: '', Number: '' },
            Amount: "0",
            PaperType: { id: '', name: '' },
            PaperWeight: "",
            Price: "0",
            Paper_Amount: "0",
            PrintFaces: "",
            PrintColorsFront: "0",
            PrintColorsBack: "0",
            PrintLamination: "",
            PrintPrice: "",
            Equation_Paper: "",
            Equation_Print: ""

        });

    const [Paperprice, setPaperprice] = React.useState("0");
    const [Paperamount, setPaperamount] = React.useState("0");

    const [Printprice, setPrintprice] = React.useState("0");


    const [data, setData] = useState([]);


    function print_check_func(event) {


        let Product_items = paperInfo;
        let saved_event = '';
        if (event) {
            saved_event = event.target.value;
        }

        if (event.target.name == "print_faces") {
            Product_items.PrintFaces = Number(saved_event);

            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(saved_event)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);

                setPrintprice(Paper_fun());
            }
            setPaperInfo(Product_items);

        }
        else
            if (event.target.name == "print_colors_front") {
                Product_items.PrintColorsFront = saved_event;

                if (Product_items.Equation_Print != "") {
                    let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(saved_event) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                    setPrintprice(Paper_fun());
                }

                setPaperInfo(Product_items);

            }
            else
                if (event.target.name == "print_colors_back") {
                    Product_items.PrintColorsBack = saved_event;

                    if (Product_items.Equation_Print != "") {
                        let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(saved_event)}`, Product_items.Equation_Print);
                        setPrintprice(Paper_fun());
                    }
                    setPaperInfo(Product_items);


                }

    }

    function paper_check_func(event) {

        let Product_items = paperInfo;

        if (event.target.name == "amount") {

            let saved_event_value = event.target.value;
            if (saved_event_value == "") {
                Product_items.Amount = "0";
                saved_event_value = "0"
            }
            else {
                Product_items.Amount = saved_event_value;
            }

            let papersize = Number(Product_items.PaperSize.Number)
            let amount = Number(saved_event_value)
            function Paperamount_cal() { if (papersize == "0") { return "0" } else { return (amount / papersize) } };

            setPaperamount(Math.ceil(Paperamount_cal()).toLocaleString());
            Product_items.Paper_Amount = Paperamount_cal();

            if (Product_items.Equation_Paper != "") {
                let Paper_fun = new Function(`amount = ${Paperamount_cal()},weight = ${Number(Product_items.PaperWeight)} , price= ${Number(Product_items.Price)}`, Product_items.Equation_Paper);
                setPaperprice(Math.ceil(Paper_fun()).toLocaleString());
            }

            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                setPrintprice(Paper_fun());
            }

            setPaperInfo(Product_items);

        }

        else if (event.target.name == "print_type_id") {

            ref_print_type.onSnapshot((querySnapshot) => {
                const item = [];
                querySnapshot.forEach((doc) => {
                    let saved_data = doc;

                    if (event.target.value == saved_data.id) {

                        item.push(
                            {
                                id: saved_data.id,
                                name: saved_data.data().name,
                                price: saved_data.data().price,
                                equation: saved_data.data().equation
                            }
                        );
                    }

                })

                Product_items.PrintType = item;

                if (item.length) {
                    Product_items.Equation_Print = item[0].equation;
                    Product_items.PrintPrice = item[0].price;
                }
                else {
                    Product_items.Equation_Print = "";
                    Product_items.PrintPrice = "0";
                }


                let papersize = 0
                let amount = Number(Product_items.Amount)

                function Paperamount_cal() { if (papersize == "0") { return "0" } else { return (amount / papersize) } };

                setPaperamount(Math.ceil(Paperamount_cal()).toLocaleString());
                Product_items.Paper_Amount = Paperamount_cal();

            });

            if (Product_items.Equation_Paper != "") {
                let Paper_fun = new Function(`amount = ${Product_items.Paper_Amount},weight = ${Number(Product_items.PaperWeight)} , price= ${Number(Product_items.Price)}`, Product_items.Equation_Paper);
                setPaperprice(Math.ceil(Paper_fun()).toLocaleString());
            }

            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                setPrintprice(Paper_fun());
            }

            setPaperInfo(Product_items);

        }
        else if (event.target.name == "print_size_id") {
            let saved_event_value = event.target.value;

            ref_paper_size.onSnapshot((querySnapshot) => {
                const item = [];
                querySnapshot.forEach((doc) => {
                    let saved_data = doc;

                    if (saved_event_value == saved_data.id) {

                        let ret = Papersize.filter((it) => {
                            let check = it.id === saved_data.data().cal_way

                            if (check) {
                                saved_data.data().cal_way = it
                                return check
                            }
                            ;
                        })

                        item.push(
                            {
                                id: saved_data.id,
                                name: saved_data.data().name,
                                Number: saved_data.data().number
                            }
                        );
                    }

                })

                if (item.length) {


                }
                else {
                    item.push(
                        {
                            id: "",
                            name: "",
                            Number: "0"
                        }
                    );
                }

                Product_items.PaperSize = item[0];

                let papersize = Number(item[0].Number)
                let amount = Number(Product_items.Amount)

                function Paperamount_cal() { if (papersize == "0") { return "0" } else { return (amount / papersize) } };

                setPaperamount(Math.ceil(Paperamount_cal()).toLocaleString());
                Product_items.Paper_Amount = Paperamount_cal();

            });

            if (Product_items.Equation_Paper != "") {
                let Paper_fun = new Function(`amount = ${Product_items.Paper_Amount},weight = ${Number(Product_items.PaperWeight)} , price= ${Number(Product_items.Price)}`, Product_items.Equation_Paper);
                setPaperprice(Math.ceil(Paper_fun()).toLocaleString());
            }

            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                setPrintprice(Paper_fun());
            }

            setPaperInfo(Product_items);


        }

        else if (event.target.name == "paper_type_id") {


            // let Paper_fun = new Function( `amount = ${Product_items.Amount},papersize = ${item[0].Number} `, Product_items.Equation_Paper);

            let papersize = Number(Product_items.PaperSize.Number)
            let amount = Number(Product_items.Amount)

            function Paperamount_cal() { if (papersize == "0") { return "0" } else { return (amount / papersize) } };

            setPaperamount(Math.ceil(Paperamount_cal()).toLocaleString());
            Product_items.Paper_Amount = Paperamount_cal();
            Product_items.PaperWeight = "0";
            Product_items.Price = "0";

            if (Product_items.Equation_Paper != "") {
                let Paper_fun = new Function(`amount = ${Product_items.Paper_Amount},weight = ${Number(Product_items.PaperWeight)} , price= ${Number(Product_items.Price)}`, Product_items.Equation_Paper);
                setPaperprice(Math.ceil(Paper_fun()).toLocaleString());
            }

            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                setPrintprice(Paper_fun());
            }

            setPaperInfo(Product_items);


        }

        else if (event.target.name == "paper_weight_id") {


            ref_paper_weight.onSnapshot((querySnapshot) => {
                const item = [];
                querySnapshot.forEach((doc) => {
                    let saved_data = doc;

                    if (event.target.value == saved_data.id) {

                        let ret2 = Paperweight.filter((it) => {
                            let check = it.id === event.target.value


                            if (check) {
                                return it;
                            }
                            ;
                        })

                        let ret1 = Papertype.filter((it) => {
                            let check = it.id === saved_data.data().papertype_id

                            if (check) {
                                saved_data.data().papertype_id = it
                                return check
                            }
                            ;
                        })

                        let ret = Papercal.filter((it) => {
                            let check = it.id === ret1[0].cal_way
                            if (check) {
                                saved_data.data().papertype_id = ret1[0]
                                return check
                            }
                            ;
                        })

                        item.push(
                            {
                                id: saved_data.id,
                                papertype_id: ret,
                                weight: saved_data.data().weight,
                                price: ret2[0].price

                            }
                        );
                    }

                })

                if (item.length) {
                }
                else {
                    item.push(
                        {
                            id: "",
                            papertype_id: [{ cal_way: "" }],
                            weight: "0",
                            price: "0"
                        }
                    );
                }

                if (item.length) {
                    Product_items.PaperWeight = item[0].weight;
                    Product_items.Price = item[0].price;
                    Product_items.Equation_Paper = item[0].papertype_id[0].cal_way;

                    console.log(item);
                }

                let papersize = Number(Product_items.PaperSize.Number)
                let amount = Number(Product_items.Amount)

                function Paperamount_cal() { if (papersize == "0") { return "0" } else { return (amount / papersize) } };
                Product_items.Paper_Amount = Paperamount_cal();

            });

            if (Product_items.Equation_Paper != "") {
                let Paper_fun = new Function(`amount = ${Product_items.Paper_Amount},weight = ${Number(Product_items.PaperWeight)} , price= ${Number(Product_items.Price)}`, Product_items.Equation_Paper);
                setPaperprice(Math.ceil(Paper_fun()).toLocaleString());
            }
            if (Product_items.Equation_Print != "") {
                let Paper_fun = new Function(`amount = ${Number(Product_items.Paper_Amount)}, price= ${Number(Product_items.PrintPrice)} , faces= ${Number(Product_items.PrintFaces)} , colors= ${Number(Product_items.PrintColorsFront) + Number(Product_items.PrintColorsBack)}`, Product_items.Equation_Print);
                setPrintprice(Paper_fun());
            }

            setPaperInfo(Product_items);
        }

    }

    const input_fields_user_table_paper_info = [{
        fieldtype: "input",
        className: "form-control mb-3",
        className_div: "p-3",
        className_label: "form-label",
        type: "text",
        name: "name",
        label: "أسم المنتج",
        onchange: paper_check_func,
        placeholder: "ادخل الاسم",
        ref: useRef()
    }
        , {
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        name: "print_type_id",
        label: "نوع الطباعة",
        dataValue: Printtype,
        onchange: getdatabase_paper_size,
        placeholder: "نوع الطباعة",
        ref: useRef()
    }
        , {
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        name: "paper_type_id",
        label: "نوع الورق",
        dataValue: Papertype,
        onchange: getdatabase_paper_weight,
        placeholder: "نوع الورق",
        ref: useRef()
    }
        , {
        fieldtype: "select",
        className: "form-control mb-3 weight_paper_class",
        type: "text",
        name: "paper_weight_id",
        label: "اوزان الورق",
        dataValue: Paperweight,
        onchange: paper_check_func,
        placeholder: "اوزان الورق",
        ref: useRef()
    }
        , {
        fieldtype: "select",
        className: "form-control mb-3",
        type: "text",
        name: "print_size_id",
        label: "المقاس",
        dataValue: Papersize,
        onchange: paper_check_func,
        placeholder: "نوع الطباعة",
        ref: useRef()
    }
        , {
        fieldtype: "input",
        className: "form-control mb-3",
        className_div: "p-3",
        className_label: "form-label",
        type: "text",
        name: "amount",
        label: "الكمية",
        onchange: paper_check_func,
        placeholder: "ادخل الكمية",
        ref: useRef()
    }
    ]


    const input_fields_user_table_print_info = [
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "print_faces",
            label: "اوجة الطباعة",
            dataValue: [
                { id: '1', name: 'وجة' },
                { id: '2', name: 'وجهان' }
            ],
            onchange: print_check_func,
            placeholder: "اوجة الطباعة",
            ref: useRef()
        }
        , {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "print_colors_front",
            label: "الوان طباعة الوجة",
            dataValue:
                [
                    { id: '1', name: '1' },
                    { id: '2', name: '2' },
                    { id: '3', name: '3' },
                    { id: '4', name: '4' }
                ],
            onchange: print_check_func,
            placeholder: "الوان طباعة الوجة",
            ref: useRef()
        }
        , {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "print_colors_back",
            label: "الوان طباعة الظهر",
            dataValue:
                [
                    { id: '1', name: '1' },
                    { id: '2', name: '2' },
                    { id: '3', name: '3' },
                    { id: '4', name: '4' }
                ],
            onchange: print_check_func,
            placeholder: "الوان طباعة الظهر",
            ref: useRef()
        }


    ]

    const input_fields_user_table_other_info = [
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "print_lamination",
            label: "السلوفان",
            dataValue:
                [
                    { id: '1', name: 'وجة مط' },
                    { id: '2', name: 'وجهان مط' },
                    { id: '3', name: 'وجة لامع' },
                    { id: '4', name: 'وجهان لامع' }
                ],
            onchange: print_check_func,
            placeholder: "السلوفان",
            ref: useRef()
        }
        ,
        {
            fieldtype: "select",
            className: "form-control mb-3",
            type: "text",
            name: "print_lamination",
            label: "نوع التجليد",
            dataValue: CoverTpye,
            onchange: print_check_func,
            placeholder: "السلوفان",
            ref: useRef()
        }
    ]

    const input_fields_user_table_paper_price = [{
        fieldtype: "input",
        readonly: true,
        className: "form-control mb-3  paper-price",
        className_div: "p-3 paper-price-div",
        className_label: "form-label",
        type: "text",
        name: "amount",
        label: "التكلفة",
        value: Paperprice,
        onchange: paper_check_func,
        placeholder: "ادخل الكمية",
        ref: useRef()
    }, {
        fieldtype: "input",
        readonly: true,
        className: "form-control mb-3  paper-price",
        className_div: "p-3 paper-price-div",
        className_label: "form-label ",
        type: "text",
        name: "amount",
        label: "عدد الورق",
        value: Paperamount,
        onchange: paper_check_func,
        placeholder: "ادخل الكمية",
        ref: useRef()
    }


    ]


    const input_fields_user_table_printing_price = [{
        fieldtype: "input",
        readonly: true,
        className: "form-control mb-3  paper-price",
        className_div: "p-3 print-price-div",
        className_label: "form-label",
        type: "text",
        name: "amount",
        label: "التكلفة",
        value: Printprice,
        onchange: paper_check_func,
        placeholder: "ادخل الكمية",
        ref: useRef()
    }


    ]

    const input_fields_user_table_other_price = [{
        fieldtype: "input",
        readonly: true,
        className: "form-control mb-3  paper-price",
        className_div: "p-3 print-price-div",
        className_label: "form-label",
        type: "text",
        name: "amount",
        label: "التكلفة",
        value: Printprice,
        onchange: paper_check_func,
        placeholder: "ادخل الكمية",
        ref: useRef()
    }


    ]

    const ref_print_type = firebase.firestore().collection(DatabaseName_print_type);
    const ref_paper_type = firebase.firestore().collection(DatabaseName_paper_type);
    const ref_paper_weight = firebase.firestore().collection(DatabaseName_paper_weight);
    const ref_paper_size = firebase.firestore().collection(DatabaseName_paper_size);
    const ref_paper_cal = firebase.firestore().collection(DatabaseName_paper_cal);
    const ref_cover_type = firebase.firestore().collection(DatabaseName_cover_type);


    function getdatabase_print_type(event) {

        if (event) {
            paper_check_func(event);
        }

        ref_print_type.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;
                item.push(
                    {
                        id: saved_data.id,
                        name: saved_data.data().name,
                        price: saved_data.data().price,
                        equation: saved_data.data().equation
                    }
                );

            })
            setPrinttype(item);

        });
    }


    function getdatabase_paper_type(event) {

        if (event) {
            paper_check_func(event);
        }


        ref_paper_type.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;
                item.push(
                    {
                        id: saved_data.id,
                        name: saved_data.data().name,
                        cal_way: saved_data.data().cal_way,
                        price: saved_data.data().price
                    }
                );

            })
            setPapertype(item);

        });
    }

    function getdatabase_paper_weight(event) {
        // setLoading(true);
        if (event) {
            paper_check_func(event);
            if (this) {
                event.savethis = this;
                getdatabase_paper_size(event);
            }

        }

        let check_value = '';
        if (this) {
            check_value = event.target.value;
        }

        ref_paper_weight.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;

                if (check_value == saved_data.data().papertype_id) {
                    item.push(
                        {
                            id: saved_data.id,
                            name: saved_data.data().weight,
                            price: saved_data.data().price
                        }
                    );
                }

            })

            setPaperweight(item);

        });
    }


    function getdatabase_cover_type(event) {

        if (event) {
            paper_check_func(event);
        }
        // setLoading(true);
        let check_value = '';
        if (this) {
            check_value = event.target.value;
        }

        ref_cover_type.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;
                item.push(
                    {
                        id: saved_data.id,
                        name: saved_data.data().name,
                        price: saved_data.data().price
                    }
                );


            })
            setCoverTpye(item);
        });
    }

    function getdatabase_paper_cal(event) {

        if (event) {
            paper_check_func(event);
        }
        // setLoading(true);
        let check_value = '';
        if (this) {
            check_value = event.target.value;
        }

        ref_paper_cal.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;
                item.push(
                    {
                        id: saved_data.id,
                        name: saved_data.data().name,
                        cal_way: saved_data.data().cal_way
                    }
                );


            })
            setPapercal(item);
        });
    }

    function getdatabase_paper_size(event) {


        let checkEvent = ''
        if (event) {

            document.getElementsByName("print_size_id")[0].value = "";
            document.getElementsByName("paper_weight_id")[0].value = "";

            paper_check_func(event);
            checkEvent = event.savethis;

        }


        let check_value = '';
        let check_name = '';
        if (this || checkEvent) {

            check_value = event.target.value;
            check_name = event.target.name;
        }

        ref_paper_size.onSnapshot((querySnapshot) => {
            const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc;

                if (check_name == "paper_type_id") {



                    setCheckpaperType(check_value);
                    if (check_value == saved_data.data().papertype_id && checkprintType == saved_data.data().printtype_id) {

                        item.push(
                            {
                                id: saved_data.id,
                                name: saved_data.data().name
                            }
                        );
                    }
                }
                else if (check_name == "print_type_id") {


                    setCheckprintType(check_value);

                    if (checkpaperType == saved_data.data().papertype_id && check_value == saved_data.data().printtype_id) {

                        item.push(
                            {
                                id: saved_data.id,
                                name: saved_data.data().name
                            }
                        );
                    }
                }




            })

            setPapersize(item);
        });
    }

    useEffect(() => {
        getdatabase_print_type();
    }, [])

    useEffect(() => {
        getdatabase_paper_type();

    }, [])


    useEffect(() => {
        getdatabase_paper_cal();

    }, [])


    useEffect(() => {
        getdatabase_paper_weight();

    }, [])

    useEffect(() => {
        getdatabase_paper_size();

    }, [])

    useEffect(() => {
        getdatabase_cover_type();

    }, [])


    OntherPaper_props.setpageactivation(true);
    OntherPaper_props.setsubpageactivation(true);

    return (
        <>
            <PricingList onthersubpageactivation={OntherPaper_props.subpageactivation} />

            <div className="card">
                <div className="card-header">
                    <h3>{OntherPaper_props.pagename}</h3>
                </div>
                <div className="card-body">
                    <div className="div-two" style={{
                        "align-items": "center"
                    }}>
                        <div style={{
                            width: "70%",
                        }}>
                            <CardsInput fields={input_fields_user_table_paper_info} reset={false} headerLabel={'بيانات الورق'} className={"card-header"} />
                        </div>
                        <div style={{
                            width: "30%"
                        }}>
                            <CardsInput fields={input_fields_user_table_paper_price} reset={false} headerLabel={'تكلفة و عدد الورق'} className={"card-header paper-price-header"} />
                        </div>
                    </div>

                    <div className="div-two" style={{
                        "align-items": "center"
                    }}>
                        <div style={{
                            width: "75%",
                        }}>
                            <CardsInput fields={input_fields_user_table_print_info} reset={false} headerLabel={'بيانات الطباعة'} className={"card-header"} />
                        </div>
                        <div style={{
                            width: "25%"
                        }}>
                            <CardsInput fields={input_fields_user_table_printing_price} reset={false} headerLabel={'تكلفة الطباعة'} className={"card-header paper-price-header"} />
                        </div>
                    </div>

                    <div className="div-two" style={{
                        "align-items": "center"
                    }}>
                        <div style={{
                            width: "75%",
                        }}>
                            <CardsInput fields={input_fields_user_table_other_info} reset={false} headerLabel={'بيانات التغليف'} className={"card-header"} />
                        </div>
                        <div style={{
                            width: "25%"
                        }}>
                            <CardsInput fields={input_fields_user_table_other_price} reset={false} headerLabel={'تكلفة التغليف'} className={"card-header paper-price-header"} />
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default OntherPaper;