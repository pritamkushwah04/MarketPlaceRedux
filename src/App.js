import './App.css';
import Header from './containers/Header';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
     {/* <Header/> */}
     {/* <ProductListing/> */}
     <Outlet/>
    </>
  );
}

export default App;
