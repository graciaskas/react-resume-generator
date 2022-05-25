import React, { useEffect, useReducer, useState } from "react";
import User from "../data/user";

export const UserContext = React.createContext(null);

const reducer = (state, action) => { 
    console.log(state, action);
};

export default function Provider({  children }) { 

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

    const values = { 
        userModel,
        handleChange
    };

    //When component is mounted
    useEffect(() => { 
        const localStorageData = JSON.parse(localStorage.getItem("userModel")) || null;
        if(localStorageData) { 
            setUserModel(localStorageData);
        }
    },[]);

    return <UserContext.Provider value={values}>
        { children}
    </UserContext.Provider>
}
