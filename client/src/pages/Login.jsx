import React, { useState } from 'react'
import { useAuth } from '../store/auth'
import "../pages/pagesStyles/login.css"

const Login = () => {

  const [user, setUser] = useState({
    email: "",
    password: ""
  })
  const { storeTokenInLS } = useAuth()

  const handleInput = (e) => {
    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value,
    })




  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(user)
    try {


      const response = await fetch(`http://localhost:5001/api/auth/login`, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",

        },
        body: JSON.stringify(user),



      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json();
        console.log("response token from login " + responseData)
        alert("login successful");
        storeTokenInLS(responseData.token)
        setUser({ email: "", password: "" });
        console.log(responseData);
      } else {
        console.error("Error:", responseData);
        alert(`login failed: ${responseData.message}`);
        console.log(`login failed: ${responseData.message}`)
      }


    } catch (error) {
      console.log("login front end error :" + error)
    }
  }
  return (
    <>
      <div className='login-main-container'>

        <div className='login-main-form-div'>
          <form onSubmit={handleSubmit}>
            <h1 style={{ margin: "30px 0%  50px 0%" }}>Login Form</h1>
            
            <input type='email' name='email' placeholder='email' id='email' required autoComplete='off' value={user.email} onChange={handleInput} className='login-input' />
            <br/>
            <input type='password' name='password' placeholder='password' id='password' required autoComplete='off' value={user.password} onChange={handleInput} className='login-input' />

            <button type='submit' className='button-login'>login</button>

          </form>
        </div>
      </div>
    </>
  )
}

export default Login