import {Routes,Route} from 'react-router-dom'
import {Navbar} from './components/Navbar'
import {Card} from './components/Card'
import { Login } from './components/Login';
import { AddProducts } from './components/AddProducts';
import React from 'react';
import { CustomerData } from './components/CustomerData';

export const myCart= React.createContext()
function App() { 
  const [isLoggedIn,setIsLoggedIn]= React.useState(false)
  const [cart,setCart]= React.useState({})
  console.log(isLoggedIn)
  return (
    <div className="App">
      <myCart.Provider  value={{cart, setCart}}>
      <Navbar data={isLoggedIn} setData={setIsLoggedIn}  />
      <Routes>
      <Route path='/login' element={<Login setData={setIsLoggedIn} />}/>
        <Route path='/' element={<Card data={isLoggedIn}/>}/>
        <Route path='/add' element={<AddProducts/>}/>
       
        
      </Routes>
      </myCart.Provider>
      <CustomerData/>
    </div>
  );
}

export default App;
