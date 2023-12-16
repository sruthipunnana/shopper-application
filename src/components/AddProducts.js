import React, { useState } from 'react';
import { myDB } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const AddProducts = () => {
    const navigate= useNavigate()
  const [productData, setProductData] = useState({
    serialNo: '',
    productName: '',
    imageURL: '',
    description: '',
    discountedPrice: '',
    originalPrice: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };
  console.log(productData)

  const saveData = () => {
    const {
      serialNo,
      productName,
      imageURL,
      description,
    discountedPrice,
    originalPrice,
    } = productData;

    myDB.collection('products').add({
    slno:serialNo,
    name:productName,
    imageUrl: imageURL,
    description,
    discountedPrice,
    originalPrice,
    });
    navigate('/')
   

    // setProductData({
    //   serialNo: '',
    //   productName: '',
    //   imageURL: '',
    //   description: '',
    //   discountedPrice: '',
    //   originalPrice: '',
    // });
    
  };

  return (
    <div className='col-md-4' style={{ marginLeft: '2em' }}>
      <label className="form-label">Serial No.</label>
      <input
        className='form-control'
        type='text'
        name='serialNo'
        value={productData.serialNo}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <label className="form-label">Product Name</label>
      <input
        className='form-control'
        type='text'
        name='productName'
        value={productData.productName}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <label className="form-label">Product ImageURL</label>
      <input
        className='form-control'
        type='text'
        name='imageURL'
        value={productData.imageURL}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <label className="form-label">Product Description</label>
      <textarea
        className="form-control"
        rows='3'
        name='description'
        value={productData.description}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      ></textarea>
      <label className="form-label">Discounted Price</label>
      <input
        className='form-control'
        type='number'
        name='discountedPrice'
        value={Number(productData.discountedPrice)}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <label className="form-label">Original Price</label>
      <input
        className='form-control'
        type='number'
        name='originalPrice'
        value={Number(productData.originalPrice)}
        onChange={handleChange}
        style={{ marginBottom: '10px' }}
      />
      <button className='btn btn-outline-success' onClick={saveData}>
        Add Product
      </button>
    </div>
  );
};
