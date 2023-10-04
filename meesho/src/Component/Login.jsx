

import React, { useContext, useState } from 'react'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from './Context/AuthContext'
import api from './ApiConfig/Index'


const Login = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [userData, setUserData] = useState({ email: "", password: "" })
    const router = useNavigate();
    console.log(userData,"-userData")

    const handleChange = (event) => {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (userData.email && userData.password) { 
    //         var flag = false;
    //         const allUsers = JSON.parse(localStorage.getItem("Users"));
    //         for (var i = 0; i < allUsers.length; i++) {
    //             if (allUsers[i].email == userData.email && allUsers[i].password == userData.password) {
    //                 localStorage.setItem("Currrent-user", JSON.stringify(allUsers[i]))
    //                 Login(allUsers[i]);
    //                 setUserData({ email: "", password: "" })
    //                 toast.success("Login Successfull.")
    //                 router('/')
    //                 flag = true;
    //                 break;
    //             }
    //         }
    //         if (flag == false) {
    //             toast.error("Please Check your email & password.")
    //         }

    //     } else {
    //         toast.error("Please fill the all fields.")
    //     }
    // }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if ( userData.email && userData.password) {
          
                const response = await api.post("/login",{ userData });
                if (response.data.success) {
                
    
                dispatch({
                  type: 'LOGIN',
                  payload: response.data.user
              })
              localStorage.setItem("token", JSON.stringify(response.data.token))
                    setUserData({ email: "", password: "" })
                    router('/')
                    toast.success(response.data.message)
                } else {
                    toast.error(response.data.message)
                }
    
           
        } else {
            toast.error("All fields are mandtory.")
        }
    }
               
    return (
      
        <div style={{marginTop: "80px",marginLeft: "60%",width:"27%",height: "600px",border: "1px solid black "}}>
          <img  style={{width: "100%", height: "280px"}} src='https://images.meesho.com/images/marketing/1661417516766.webp '/>
            <p style={{fontSize:"20px"}}> <b>Sing.up your profile</b></p>
            <form onSubmit={handleSubmit} >
    <lable style={{marginLeft: "10px" }} >Email:</lable><br/>
     <input value={userData.email}  style={{width:"90%" , height: "30px",}} type='email' name='email'  onChange={handleChange}/><br/>
      <label>Password</label><br />
      <input value={userData.password} style={{width:"90%" , height: "30px",}} type='password' onChange={handleChange} name='password' /><br />
       <input  style={{width:"60%" , height: "40px",marginTop: "40px" , marginLeft: "70px" , backgroundColor:"purple", color:"white"}}  type='submit' value='Login'/><br/>
             
            </form>
               <p  style={{marginTop:"20px", color: "red"}}  onClick={() => router ('/register')}>New Register here ? </p>

        </div>
    )
    }



export default Login