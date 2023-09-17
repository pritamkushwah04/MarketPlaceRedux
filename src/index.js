import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import App from './App';
import store from "./redux/store";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';


const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: "",
        element: <ProductListing/>
      },
      {
        path: "product/:productId",
        element: <ProductDetail/>
      },
      {
        path: "productComponent",
        element: <ProductComponent/>
      },
      
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
       <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);
