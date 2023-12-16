import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import { myCart } from '../App';


export const Navbar = (props) => {
  
  const {data, setData}= props
  const navigate= useNavigate()

  const {cart}= React.useContext(myCart)

  const displayData = () => {
    return <div>
      {Object.keys(cart).map((each) => (
      <div key={each}>
        <p>name: {cart[each][1]}</p>
        <p>Quantity: {cart[each][0]}</p>
        <p>Price: {cart[each][2]}</p>
      </div>
    ))}
    <a className='btn btn-success' href='product.html'>Continue</a>
    </div>;

  }; 
 
  const logOut=()=>{
    setData(false)
    navigate('/login')
  }      

 
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Cart</Popover.Header>
      <Popover.Body>{displayData()}</Popover.Body>
    </Popover>
  );
 

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Shop&Shop</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
          </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         {data?
           (
          <>
           <li className="nav-item">
             <Link to='/' className="nav-link">Home</Link>
            </li>
           <li className="nav-item">
             <Link to='/add' className="nav-link">Add Products</Link>
          </li>
          <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
            <Button variant="secondary">Cart</Button>
          </OverlayTrigger>
          
           <button className='btn btn-outline-light' onClick={logOut}>Logout</button></>
        ): <Link to='/login'><button className='btn btn-outline-light'>Login</button></Link>   }
           </ul>
        
    </div>      
  </div>
</nav>
    </div>
  )
  
}


// Certainly! The Link component from react-router-dom is designed to manage navigation within a React application using the React Router library. When you wrap an element (in this case, a button) with the Link component and specify a to prop that points to a route path, it creates an anchor-like element.

// Even if the Navbar component isn't directly nested within a Route component, the Link component provided by React Router still encapsulates the button with its navigation functionality. When the button (wrapped in the Link) is clicked, React Router handles the navigation to the specified path.

// Now, regarding the use of useNavigate within the Navbar component: useNavigate is an alternative hook in React Router v6 (compared to useHistory in earlier versions) that allows you to programmatically navigate within your application.

// In your scenario, clicking the "Logout" button triggers the logOut function, which utilizes useNavigate to navigate to the login page (navigate('/login')). Even though the Navbar component itself isn't directly nested within a Route, the use of Link to wrap the button allows React Router to manage the navigation, enabling you to use the useNavigate hook within the component to navigate the user to the login page.