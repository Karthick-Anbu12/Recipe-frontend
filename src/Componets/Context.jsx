import axios, { Axios } from "axios";
import React, { createContext, useEffect, useState } from "react";

const context = createContext()

export const UserProvider = ({ children }) => {
    const [datas, setdata] = useState([])
    const [list, setlist] = useState([])
    const [isLoggedIn, setLoggedin] = useState(true)
    const getdata = async () => {
        const value = await axios.get("https://recipe-backend-2t3o.onrender.com/getdata",{headers:{Authorization:window.localStorage.getItem("mytoken")}})
        setdata(value.data)
        setlist(value.data.recipelist)
    }
    const deleterecipe = async (index) => {
        list.splice(index,1)
        setlist([...list])
        await axios.post("https://recipe-backend-2t3o.onrender.com/removerecipe", list,{headers:{Authorization:window.localStorage.getItem("mytoken")}})
    }
    useEffect(()=>{
        getdata()
    },[])
    return <context.Provider value={{ getdata,deleterecipe,list,setlist,datas,isLoggedIn,setLoggedin }}>
        {children}
    </context.Provider>
}
export default context