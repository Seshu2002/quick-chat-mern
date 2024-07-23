import React, { useEffect } from "react"
import { Outlet } from "react-router-dom"
import axios from "axios"
import { useSelector } from "react-redux"

const Home = () => {
    const user = useSelector(state => state.user)
    console.log("redux user",user)

    const fetchUserDetails = async () => {
        try {
            const USER_DETAILS_URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
            const response = await axios({
    
                url: USER_DETAILS_URL,
                withCredentials: true
            })

            console.log("Current user details:", response)

        } catch (error) {
            console.log("Error:", error)
        }
    }
    useEffect(() => {
        fetchUserDetails()
    }, [])
    return (
        <div>
            Home
            {/* Message Component */}
            <section>
                <Outlet />
            </section>

        </div>
    )
}

export default Home