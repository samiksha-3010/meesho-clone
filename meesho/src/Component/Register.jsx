
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'
import axios from 'axios'

const Register = () => {
     const [userData,setUserData] = useState({name: "",email: "",password: "",confirmPassword:"",role: "Buyer"})
     const router = useNavigate();
     const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    // console.log(userData, "- userdata")

    function selectRole (event){
        // console.log(event.target.value = "-role")
     setUserData({...userData,["role"]: event.target.value})
     }

     const handleSubmit = async (event) => {
        event.preventDefault();
        if (userData.name && userData.email && userData.password && userData.confirmPassword && userData.role) {
            if (userData.password === userData.confirmPassword) {
                const response = await axios.post("/register", { userData });
                if (response.data.success) {
                    setUserData({ name: "", email: "", password: "", confirmpassword: "", role: "Buyer" })
                    router('/login')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
    
            } else {
                toast.error("Password and Confirm Password not Matched.")
            }
        } else {
            toast.error("All fields are mandtory.")
        }
    }
    
  return (
    <div  style={{ marginTop: "90px"}}>
         <h2>Register</h2>
         <form onSubmit={handleSubmit}>
                <label>Name</label><br />
                <input value={userData.name} type='text' name='name' onChange={handleChange} /><br />
                <label>Slect Role:</label><br />
                <select onChange ={selectRole}>
                    <option value="Buyer">Byuer</option>
                    <option value= "Seller">Seller</option>
                </select><br/>
                <label>Email</label><br />
                <input value={userData.email} type='email' name='email' onChange={handleChange} /><br />
                <label>Password</label><br />
                <input type='password' name='password' onChange={handleChange} /><br />
                <label>ConfirmPassword</label><br />
                <input value={userData.confirmPassword} type='Password' name='confirmPassword' onChange={handleChange} /><br />
                <input type='submit' value='Register' /><br />
            </form>
    </div>
  )
}

export default Register;