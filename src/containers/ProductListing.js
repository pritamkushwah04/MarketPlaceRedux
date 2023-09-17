import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { setProducts } from '../redux/actions/productActions';
import axios from 'axios';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
  // const _products = useSelector((state)=>state);
  const dispatch =useDispatch();

  const fetchProducts= async()=>{
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err)=>{
        console.log("Err",err);
    });
    dispatch(setProducts(response.data));
  }

  useEffect(()=>{
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  
  
  return (
    <div className='ui grid container'>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
