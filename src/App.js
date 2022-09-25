import './App.css';
import {addToCart} from './redux/action';
import {useDispatch} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const product = {
    name: "1 Phome",
    type: "mobile",
    price: 1000000,
    color: "black"
  }


  return (
    <div className="App">
      <button onClick={() => {dispatch(addToCart(product))}}>Add To Cart</button>
    </div>
  );
}

export default App;
