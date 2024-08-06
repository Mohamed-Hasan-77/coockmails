import Err from "./assets/Erro-404-1-1.jpg"


// react router 
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

// components 
import Home from './Components/Home/Home';
import Cart from "./Components/Cart/Cart.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

// cart
import { CartProvider } from "./contexts/CartContext.jsx";


import "./index.css"


const router = createBrowserRouter([

  { element: <Home />, path: '' },
  { element: <Home />, path: '/' },
  { element: <Home />, path: '/office/' },
  { element: <Home />, path: './' },
  { element: <Home />, path: 'home' },


  { element: <Cart />, path: '/cart' },
  { element: <Cart />, path: '/office/cart' },
  { element: <Cart />, path: '/office/cart/cart' },
  {
    path: "*",
    element: <>
      <Navbar />
      <div className="img w-full ">
        <img
          className="object-cover "
          src={Err}
          alt="not found"
        />
      </div>
    </>,
  },
])


function App() {

  return (
    <>
      <CartProvider>
          <RouterProvider router={router} />
      </CartProvider>
    </>
  )
}

export default App
