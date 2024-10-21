import React, { useState } from 'react'
import { useAuth } from '../store/auth'

const Contact = () => {

  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  })
  const [userData, setUserData] = useState(true)
  const { user } = useAuth();

  if (userData && user) {

    setContact({
      username: user.username,
      email: user.email,
      message: ""
    })
    setUserData(false)
  }

  const handleInput = (e) => {

    const name = e.target.name
    const value = e.target.value
  

  setContact({
    ...contact,
    [name] : value
  })}
  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(contact)
  }
  return (
    <>
      <section>
        <div>
          <h1>Contact Form</h1>
        </div>
        {/* main contact form */}

        <div>
          <div>
            <img src='' alt='contact form image' />
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">username</label>
              <input type="text" name='username' id='username' required autoComplete='off'onChange={handleInput} value={contact.username} />

              <label htmlFor="email">email</label>
              <input type="email" name='email' id='email' required autoComplete='off' onChange={handleInput} value={contact.email}/>

              <label htmlFor="message">message</label>
              <textarea name="message" id="message" cols="30" rows="10" required autoComplete='off' onChange={handleInput} value={contact.message}></textarea>
            <button type='submit'>submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact