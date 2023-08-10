
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
 import { AuthContext } from './Context/AuthContext';
//  import './Profile.css'


const Profile = () => {

    const { Login, state } = useContext(AuthContext)

    const [userData, setUserData] = useState({});
    const router = useNavigate()

    console.log(userData, "userData")

    // useEffect(() => {
    //     if (!state?.user?.name) {
    //         router('/login')
    //     }
    // }, [state])

    useEffect(() => {
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        // if (!currentUser) {
        //     router("/login")
        // }
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        if (currentUser && allUsers) {
            for (var i = 0; i < allUsers.length; i++) {
                if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                    setUserData(allUsers[i])
                }
            }
        }
    }, [])

    function handleChange(event) {
        setUserData({ ...userData, [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault();
        const currentUser = JSON.parse(localStorage.getItem("Currrent-user"));
        const allUsers = JSON.parse(localStorage.getItem("Users"));
        for (var i = 0; i < allUsers.length; i++) {
            if (allUsers[i].email == currentUser.email && allUsers[i].password == currentUser.password) {
                allUsers[i].name = userData.name;
                allUsers[i].password = userData.password;
                currentUser.password = userData.password;
                currentUser.name = userData.name;
            }
        }
        Login(currentUser)
        localStorage.setItem("Currrent-user", JSON.stringify(currentUser))
        localStorage.setItem("Users", JSON.stringify(allUsers))
        setUserData({})
        alert("Profile updated.")
    }


    return (
        <div  style={{marginTop: "100px"}}>
            <div  style={{width: "50%",border:"1px solid black",}}></div>
            <div style={{width: "25%",height: "600px", border: "1px solid red",margin:"auto", marginTop: "30px",borderRadius:"50px",backgroundColor:"pink" }}>
               <h1  style={{marginLeft:"80px"}}>Profile</h1>

              <button  style={{width: "40%", height: "40px", backgroundColor: "purple" , color:"white",borderRadius:"50px",marginTop: "30px",marginLeft: "70px"}}  onClick={() => router('/login')}>Login</button>
              <button  style={{width: "40%", height: "40px", backgroundColor: "purple" , color:"white",borderRadius:"50px",marginTop: "30px",marginLeft: "70px"}}>Logout</button>
           
            <form onSubmit={handleSubmit}>
                <label style={{marginLeft: "50px", }}>Change Name</label><br />
                <input style={{marginLeft:"80px",width:"60%",height:"40px", border:"none",color:"black"}} type='text' value={userData.name} name="name" onChange={handleChange} /><br />
                <label  style={{marginLeft: "50px"}}>Change Password</label><br />
                <input style={{marginLeft:"80px",  width:"60%",height:"40px", border:"none",color:"black",}} type='text' value={userData.password} name="password" onChange={handleChange} /><br />
                <input style={{width: "40%", height: "40px", backgroundColor: "red" , color:"white",borderRadius:"50px",marginTop: "30px",marginLeft: "70px"}} type='submit' value='Edit Profile'/>
            </form>

        </div>
         </div> 
       
    )
}

export default Profile