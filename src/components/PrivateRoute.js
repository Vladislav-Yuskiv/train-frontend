import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom"

export default function PrivateRoute() {

    const [ isValid , setIsValid] = useState(false)
    
    useEffect(() => {
        const token = localStorage.getItem('token');

        const parseToken = JSON.parse(token)
    })
    return isLoggedIn ? children : <Navigate to={redirectTo} />;
}

