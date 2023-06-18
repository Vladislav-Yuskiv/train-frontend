import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"

export default function PrivateRoute({redirectTo}) {

    const [ isValid , setIsValid] = useState(false)
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        const parseToken = JSON.parse(token)

        //this we need to check token
    })
    return isValid ? children : <Navigate to={redirectTo} />;
}

