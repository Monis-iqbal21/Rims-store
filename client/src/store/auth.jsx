import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user , setUser] = useState("")
 
     const storeTokenInLS = (serverToken) => {

        return localStorage.setItem('token', serverToken)
    }

    const isloggedIn = !!token;
    // logout functionality

    const LogoutUser =()=>{
        setToken("");
        return(
            localStorage.removeItem("token")
        )
    };

    // authentication getting user data with logged in 


    const userAuthentication = async ()=> {
        try {
            const response = await fetch("http://localhost:5001/api/auth/user",
                {
                    method: "GET",
                    Authorization : `Bearer ${token}`

                }
            )

            if(response.ok){
                const data = await response.json()
                console.log("user data " + data.userData);
                
                setUser(data.userData)
            }
        } catch (error) {
            console.log("error from authentication" + error)
        }
    }


    return (
        <AuthContext.Provider value={{isloggedIn,storeTokenInLS, LogoutUser,user}}>
            {children}
        </AuthContext.Provider>)
}

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the provider")
    }

    return authContextValue;
}
