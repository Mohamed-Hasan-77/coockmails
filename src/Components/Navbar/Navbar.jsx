import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";


import { FaCartShopping } from "react-icons/fa6";
import logo from "../../assets/logo1.svg"

import "./navStyle.scss"

export default function Navbar() {

    const { cart } = useContext(CartContext);


    return <>


        <div className="NavBar px-4  w-full  pt-7 pb-5   dir-ltr    ">
            <div className="container flex justify-between items-center w-full">
                <div className="logo  ">
                    <Link to={"/office"}  className="flex items-center  ">
                        <img src={logo} className="w-24" alt="logo" />
                    </Link>
                </div>
                <div className=" flex items-center justify-end  w-full">

                    <Link to={"/office/cart"} className=" cart flex justify-center items-centers relative p-2 rounded-lg  ">
                        <FaCartShopping size={30} color="black"  />

                        <span className="bg-red-600 flex justify-center items-center text-xs rounded-full text-white font-bold w-7 h-7 absolute -top-3 -right-3">  {cart.length} </span>
                    </Link>

                </div>

            </div>
        </div>


        <div className="button-container md:hidden">
            <Link to={"/office"} >
                <button className="button">
                    <svg
                    className="icon"
                    stroke="currentColor"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"
                    ></path>
                    </svg>
                </button>
                </Link>
              <span className=" text-2xl"> | </span>
              <Link to={"/office/cart"} >
                <button className="button relative">
                    <svg
                    className="icon"
                    stroke="black"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1.3em"
                    width="1.3em"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path
                        d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                    ></path>
                    </svg>
                    <span className="bg-red-600 flex justify-center items-center text-xs rounded-full text-white font-bold w-6 h-6 absolute -top-3 -right-3">  {cart.length} </span>
                </button>
                </Link>
                </div>

    
    </>
}

