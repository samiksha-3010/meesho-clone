

import { createContext, useEffect, useReducer } from "react";
import api from "../ApiConfig/Index";
import toast from "react-hot-toast";
import axios from "axios";

export const AuthContext = createContext();

const initialState = { user: null };

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, user: action.payload }

        case 'LOGOUT':
            localStorage.removeItem("token")
            toast.success("Logout success.")
        return { ...state, user: null }
        default:
            return state
    }
}


  export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function getCurrentUserData() {
            var token = JSON.parse(localStorage.getItem("token"));
            if (token) {
                try {
                         const response = await axios.post("http://localhost:8000/get-current-user", { token });

                    // const response = await api.post("/get-current-user", { token });
                // console.log(response.data,"-response data")
                if (response.data.success) {
                    dispatch({
                        type: "LOGIN",
                        payload: response.data.user
                    })
                } else {
                    dispatch({
                        type: "LOGOUT",
                        
                    });
                }
                } catch (error) {
                    console.log(error);
                }
            }

        }
        //     const response = await api.post("/get-current-user", { token });

        //     // const response = await axios.post("http://localhost:8000/get-current-user", { token });
        //     if (response.data.success) {
        //         dispatch({
        //             type: "LOGIN",
        //             payload: response.data.user
        //         })
        //     } else {
        //         dispatch({
        //             type: "LOGOUT"
        //         });
        //     }
        // }
        getCurrentUserData();
    }, [])

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;


