import React, { useEffect, useReducer, useState } from "react";
import User from "../data/user";

export const UserContext = React.createContext(null);


export default function Provider({  children }) { 
    //User model states
    const [userModel, setUserModel] = useState(User);
    //function to handle input change...
    const handleChange = (event) => { 
        const { name, value } = event.target;
        const  datatype = event.target.getAttribute("datatype");
        //if input's dataAttribute attribute value is null
        if(datatype == null) { 
            setUserModel({...userModel, [name] : value});
        } else { 
            //Update object.object[property]
            setUserModel({ ...userModel, [datatype] : { ...userModel[datatype],[name]: value }});
        }
    };

    //Context values to share
    const values = { 
        userModel,
        handleChange
    };

    //When component is mounted
    useEffect(() => { 
        //Get localStorage data
        const localStorageData = JSON.parse(localStorage.getItem("userModel")) || null;
        if(localStorageData) { 
            setUserModel(localStorageData); //Set it to actual user model state
        }else{
            localStorage.setItem("userModel", JSON.stringify(userModel));
        }
    },[]);

    return (
        <UserContext.Provider value={values}>
            { children}
        </UserContext.Provider>
    )
}
