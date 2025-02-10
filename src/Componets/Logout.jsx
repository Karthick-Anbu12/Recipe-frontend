import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import context from './Context';

function Logout() {
    const {  setLoggedin } = useContext(context)
    let navigate = useNavigate();
    let logout = () => {
        window.localStorage.removeItem("mytoken");
        setLoggedin(false);
        navigate("/");

    };
    useEffect(() => {
        let token = window.localStorage.getItem("mytoken");
        if (token) {
            setLoggedin(true);
        } else {
            setLoggedin(false)
        }
    }, []);
    return (
        <div>
            {
                <button className="btn btn-danger ms-2" onClick={logout}>
                    Logout
                </button>
            }
        </div>
    );
}

export default Logout

