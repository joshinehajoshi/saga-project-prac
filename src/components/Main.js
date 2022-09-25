import { useState } from 'react';
import '../App.css';
import {addToCart, removeToCart} from '../redux/action';
import {useDispatch} from 'react-redux';

function Main() {

  const [num, setNum] = useState(0)

  const dispatch = useDispatch();
  const product = {
    name: "1 Phome",
    type: "mobile",
    price: 1000000,
    color: "black"
  }

  const productRemoved = {
    data: "Removed"
  }


  return (
    <div className="App">
      <button onClick={() => {dispatch(addToCart(product))}}>Add To Cart</button>
      <button onClick={() => {dispatch(removeToCart(productRemoved))}}>Remove To Cart</button>
    </div>
  );
}

export default Main;
