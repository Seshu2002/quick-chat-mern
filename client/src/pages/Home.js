import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { logout, setUser } from "../redux/userSlice"
import Sidebar from "../components/Sidebar"

const Home = () => {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    console.log("Redux User", user)

    const fetchUserDetails = async () => {
        try {
            const USER_DETAILS_URL = `${process.env.REACT_APP_BACKEND_URL}/api/user-details`
            const response = await axios({

                url: USER_DETAILS_URL,
                withCredentials: true
            })

            dispatch(setUser(response.data.data))

            if (response.data.logout) {
                dispatch(logout())
                navigate("/email")
            }

            console.log("Current user details:", response)

        } catch (error) {
            console.log("Error:", error)
        }
    }
    useEffect(() => {
        fetchUserDetails()
    }, [])
    return (
        <div className="grid grid-cols-[300px,1fr] h-screen max-h-screen">
            <section className="bg-white ">
                <Sidebar/>
            </section>

            <section >
                <Outlet />
            </section>

        </div>
    )
}

export default Home