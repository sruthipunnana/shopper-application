import React, { useEffect } from 'react'
import { myDB } from '../firebase'

export const CustomerData = () => {
  
    useEffect(()=>{
        // logic to read data from localstorage and store it in db
        const name=localStorage.getItem('NAME')
        const city=localStorage.getItem('CITY')
        const country=localStorage.getItem('COUNTRY')
        const  pin=Number(localStorage.getItem('PIN'))
        const amount= Number(localStorage.getItem('TOTAL'))
   

        myDB.collection('customers').add({
            name,city,country,pin,amount
        })
    },[])

  return (
   
    <div></div>
  )
}
