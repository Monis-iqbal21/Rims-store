import React, { useState } from 'react'
import "./pagesStyles/register.css"
import cyber from "../images/cyber.png"
import { useAuth } from '../store/auth'

const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: ""
  })

  const { storeTokenInLS } = useAuth()

  const handleInput = (e) => {

    let name = e.target.name
    let value = e.target.value

    setUser({
      ...user,
      [name]: value  // dynamic for getting value of input of 4 fields
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      console.log("response data : ", response);

      if (response.ok) {
        const responseData = await response.json(); // changed and moved above to if condition to make it work

        console.log("response token from register " + responseData)

        alert("registration successful");
        storeTokenInLS(responseData.token)
        setUser({ username: "", email: "", phone: "", password: "" });
        console.log(responseData);


      } else {
        console.error("Error:", responseData);
        alert(`Registration failed: ${responseData.message}`);
        console.log(`Registration failed: ${responseData.message}`)
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <>
      <div className='main-container-register'>

        <div className='image-div'>
          <img src={cyber} alt='form picture' className='register-image' />
        </div>



        <div className='form-main-div'>

          <form onSubmit={handleSubmit}>
            <h1 style={{ textAlign: "center", color: "#C0C0C0" }}>Registration Form</h1>
            <br />
            <div className='field' >
              {/* <label htmlFor='username' className='register-form-label'>username</label><br /> */}
              <input type='text' name='username' placeholder='User Name' id='username' className='register-form-input' required autoComplete='off' value={user.name} onChange={handleInput} />
              <br /><br />
              {/* <label htmlFor='email' className='register-form-label'>email</label><br /> */}
              <input type='email' name='email' placeholder='Email' id='email' className='register-form-input' required autoComplete='off' value={user.email} onChange={handleInput} />
              <br /><br />
              {/* <label htmlFor='phone' className='register-form-label'>phone</label><br /> */}
              <input type='number' name='phone' placeholder='Phone' id='phone' className='register-form-input' required autoComplete='off' value={user.phone} onChange={handleInput} />
              <br /><br />
              {/* <label htmlFor='password' className='register-form-label'>password</label><br /> */}
              <input type='password' name='password' placeholder='Password' id='password' className='register-form-input' required autoComplete='off' value={user.password} onChange={handleInput} />

              <br /><br />

              <button type='submit' className="button-register">Register now</button>
            </div>
          </form>
        </div>

      </div>
    </>
  )
}

export default Register