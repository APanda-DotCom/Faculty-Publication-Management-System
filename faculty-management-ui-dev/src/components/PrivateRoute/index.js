import { useEffect, useState } from "react"

import Login from "../Login";

export default function PrivateRoute({ children ,setIsLoggedIn}) {

    const[user,setUser]=useState(false)


    useEffect(() => {

        const userData = localStorage.getItem('userData');
        const userDetails = JSON.parse(userData)
        const token = localStorage.getItem("token")


        if (userDetails && Object?.keys(userDetails).length > 0 && token) {
            console.log("dfdsds");
            setUser(true);
        }
    }, [])

    if (user) {
        return children;
    } else {
        return <Login setIsLoggedIn={setIsLoggedIn} />;
    }

}