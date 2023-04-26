import React from "react";

function Logout  (logoutprops) {

    return (
        <>
        <button className="btn btn-secondary mb-3" onClick={()=>{

            localStorage.setItem("react_user_username" , "");
            localStorage.setItem("react_user_password" , "");
            localStorage.setItem("react_user_role" , "");
            localStorage.setItem("react_user_email" , "");
            localStorage.setItem("react_user_name" , "");
            localStorage.setItem("react_user_phone" , "");
            localStorage.setItem("react_user_id" , "");

            logoutprops.checkuserSet(true);
            logoutprops.setIsOpen(false);
        }}>LOGOUT</button>
        </>
    )

  };

  export default Logout;