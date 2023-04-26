import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import firebase from '../DatabaseComponents/firebase';

import  { useEffect, useRef, useState } from "react";
import AlertMsg from "../Components/AlertMsg"
import Loading from '../Components/Loading';

function Login(Loginprops) {

    const DatabaseName = "users";

    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [checklogin , setChecklogin] = useState(false);
    

    const ref = firebase.firestore().collection(DatabaseName);

    function getdatabase(){

        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
        const item = [];
            querySnapshot.forEach((doc) => {
                let saved_data = doc.data();
                item.push(saved_data);
            })
            setData(item);
            setLoading(false);
        });

    }

    useEffect( () => {
        getdatabase();
    },[])


    if(localStorage.getItem("react_user_username") != "" && localStorage.getItem("react_user_username") != undefined
    && localStorage.getItem("react_user_password") != "" && localStorage.getItem("react_user_password") != undefined)
    {
        Loginprops.checkuserSet(false);
        return <></>

    }

    if(loading){
        return <Loading  />
    }


    function handlelogin(event)
    {
        event.preventDefault();

        data.map((item,index) =>{
            if(event.target.username.value == item.username)
            {
                if(event.target.password.value == item.password)
                {
                    localStorage.setItem("react_user_username" , item.username);
                    localStorage.setItem("react_user_password" , item.password);
                    localStorage.setItem("react_user_role" , item.role);
                    localStorage.setItem("react_user_email" , item.email);
                    localStorage.setItem("react_user_name" , item.name);
                    localStorage.setItem("react_user_phone" , item.phone);
                    localStorage.setItem("react_user_id" , item.id);

                    Loginprops.checkuserSet(false);
                }
                else
                {


                }
            }
            else
            {
              if(localStorage.getItem("react_user_username") == "" || localStorage.getItem("react_user_username") == undefined
              && localStorage.getItem("react_user_password") == "" || localStorage.getItem("react_user_password") == undefined)
              {
                AlertMsg("Wrong Username");
              }
            }   
        }
        )

    }

  return (
    <MDBContainer className='my-5'>
      <MDBCard>

        <MDBRow className='g-0 d-flex align-items-center'>

          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>

          <MDBCol md='8'>
            <form onSubmit={handlelogin}>
            <MDBCardBody>

              <MDBInput wrapperClass='mb-4' label='Username' name='username' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Password' name='password' id='form2' type='password'/>

              <div className="d-flex justify-content-between mx-4 mb-4">
                {/* <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' /> */}
                {/* <a href="!#">Forgot password?</a> */}
              </div>

              <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>

            </MDBCardBody>
            </form>

          </MDBCol>

        </MDBRow>

      </MDBCard>
    </MDBContainer>
  );
}

export default Login;