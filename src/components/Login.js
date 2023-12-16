import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, googleProvider } from '../firebase'
import { useNavigate } from 'react-router-dom'


export const Login = (props) => { 
    const {setData}= props
    const navigate = useNavigate()
   
    const logIn=()=>{
     
      signInWithPopup(auth, googleProvider)
      .then(()=>{
        // Logic to display user details 
        setData(true)
        const username= auth.currentUser.displayName
        const email = auth.currentUser.email 
        console.log(username,email)
        navigate('/')
      })
      .catch((error)=>{
         console.log(error)
      })
    }

  return (
    <div style={{margin:'1em'}}>
        <button className='btn btn-outline-primary' onClick={logIn}>Continue with Google</button>
    </div>
  )
}
