import React from 'react' 
import { myDB } from '../firebase'
import { myCart } from '../App'

export const Card = (props) => {
  const {data}=props
  const [productsList, setProductsList]= React.useState([])
  const {setCart}= React.useContext(myCart)
  React.useEffect(()=>{
    myDB.collection('products').onSnapshot((snapshot)=>{
       setProductsList(snapshot.docs.map((doc)=>{
        return doc.data()
       }))
    })
  },[])  
  console.log(productsList)

  const collectData = (id, name, price) => {
    let cart = {};
    // to find the status of cart
    if (localStorage.getItem('cart') === null) {
      cart = {};
    } else {
      cart = JSON.parse(localStorage.getItem('cart'));
    }

    if (cart[id] === undefined) {
      const quantity = 1;
      cart[id] = [quantity, name, price];
    } else {
      const quantity = cart[id][0] + 1;
      const newPrice = Number(price) * quantity;
      cart[id] = [quantity, name, newPrice];
    }
    setCart(cart)
    localStorage.setItem('cart', JSON.stringify(cart));
  };

 
  return (
    data ? (
      <div style={{ display: 'flex', flexWrap: 'wrap', margin: '1em' }}>
        {productsList.map((each) => (
          <div className="card" key={each.slno} style={{ width: '20em', margin: '0.8em', padding: '1em', minHeight: '25em' }}>
            <img src={each.imageUrl} className="card-img-top" style={{ height: '6.9em', width: '8em', marginLeft: '4.6em' }} alt="each" />
            <div className="card-body">
              <h5 className="card-title">{each.name}</h5>
              <p className="card-text">{each.description}</p>
              <p className="card-text">{`Rs.${each.discountedPrice}`}</p>
              <del>
                <p className="card-text">{`Rs.${each.originalPrice}`}</p>
              </del>
              <a href="#" className="btn btn-primary" onClick={() => collectData(each.slno, each.name, each.discountedPrice)}>Add to Cart</a>
            </div>
          </div>
        ))}
      </div>
    ) : <h5 style={{textAlign:'center', margin:'10em',fontStyle:'italic'}}>Hola! Welcome to <span style={{color:'violet'}}>Shop&Shop</span> App, Click on <span style={{color:'orange'}}>Login</span> Button, to Login. Happy Shopping🌸</h5>
  );
  
}
