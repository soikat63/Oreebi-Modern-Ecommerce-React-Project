import React from "react";
import Home from "./Components/layer/page/Home";
import {createRoutesFromElements,createBrowserRouter,RouterProvider,Route,} from "react-router-dom";
import RootLayout from "./Components/layer/RootLayout";
import Product from "./Components/layer/page/Product";
import SignUp from "./Components/layer/SignUp";
import Login from "./Components/Login";
import ProductInside from "./Components/ProductInside";
import About from "./Components/About";
import Contacts from "./Components/Contacts";
import Account from "./Components/Account";
import Error from './Components/Error';
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        element={<RootLayout />}
        //  errorElement={<Error/>}
      >
          <Route index element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/productinside" element={<ProductInside />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/account" element={<Account />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
