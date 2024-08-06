import { useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { CartContext } from "../../contexts/CartContext";

import { BsCartPlus } from "react-icons/bs";
import { BsCartX } from "react-icons/bs";

import "./ProductsStyle.scss"


export default function Products() {

    const { addToCart, removeFromCart,  cart, updateWeight, products, loading  } = useContext(CartContext);
    const [showenProducts, setShowenProducts] = useState(products)
    const divsToRender = [1,2,3,4,5,6,7,8,9,1, 2, 5];

    const isInCart = (id) => {
        return cart.some(cartItem => cartItem.id === id);
    };

    function showProducts(categorie) {
        if(categorie == "") {
            setShowenProducts(products);
        } else {
            const filteredProducts = products.filter(product => product.category === categorie);
            setShowenProducts(filteredProducts);
        }
    }

    const handleIncrementWeight = (id) => {
        updateWeight(id, 0.5);
    };

    const handleDecrementWeight = (id) => {
        updateWeight(id, -0.5);
    };

    
    
    useEffect(() => {
        !loading ? showProducts("") : "" 
    }, [loading]);


    return <>



        <div  id="categorie" className=" relative  ">

            <div className="title flex justify-center  text-xl md:text-2xl font-bold ">
                <h2 className="  border-gray border-2 p-3 px-10 rounded bg-gradient-to-r from-gray-900 to-gray-700 text-white ">
                    الأصناف
                </h2>  
            </div>

            <div className="boxes mt-5 md:mt-10 flex justify-center flex-wrap  items-center font-bold text-base md:text-xl px-10">
                <div className="box  w-1/2 lg:w-1/4 text-center ">
                    <p onClick={()=> setShowenProducts(products)} className="  border-gray border-2 p-3 px-5 md:px-10 cursor-pointer rounded bg-gradient-to-r from-gray-900 to-gray-700 text-white " >
                        كل الأصناف
                    </p> 
                </div>

                <div className="box  w-1/2 lg:w-1/4 text-center ">
                    <p onClick={()=> showProducts("vegetables")} className="  border-gray border-2 p-3 px-5 md:px-10 cursor-pointer rounded bg-gradient-to-r from-gray-900 to-gray-700 text-white " >
                        الخضار
                    </p> 
                </div>

                <div className="box  w-1/2 lg:w-1/4 text-center">
                    <p onClick={()=> showProducts("fruits")} className="  border-gray border-2 p-3 px-5 md:px-10 cursor-pointer rounded bg-gradient-to-r from-gray-900 to-gray-700 text-white " >
                        الفواكه
                    </p> 

                </div>

                <div className="box  w-1/2 lg:w-1/4 text-center ">
                    <p onClick={()=> showProducts("dairy")} className="  border-gray border-2 p-3 px-5 md:px-10 cursor-pointer rounded bg-gradient-to-r from-gray-900 to-gray-700 text-white ">
                        الجبن والألبان
                    </p> 
                </div>
            </div>

        </div>

        <div id="Products" className="py-10 pb-16 relative overflow-hidden ">
            <div className="container px-0 md:px-24">

                <div className="productBox flex justify-center flex-wrap ">

                <AnimatePresence>
                    {!loading ? 
                     showenProducts?.map((ele, idx) => {
                        const product = products?.find(p => p.id === ele.id);
                        return <motion.div
                        initial={{
                            y: 20,
                            opacity: 0
                        }}
                        animate={{ y: 0,
                            opacity : 1
                         }}
                        transition={{ ease: "linear", duration: 0.2 }}
                        exit={{
                            y: 20,
                            opacity: 0
                        }}
                        key={idx} className="productWrapper p-3 py-5 w-full md:w-1/2 lg:w-1/3 ">
                        <div style={{minHeight: "320px"}} className="product shadow-md shadow-gray-400 flex flex-col justify-between items-center rounded bg-gray-100  ">
                            <div className="img  flex justify-center items-center gray-200">
                                <img src={ele.img} className="h-52 rounded-2xl" alt={ele.id} />
                            </div>
                            <div className="title w-full  rounded-2xl bg-white p-4 pb-2 px-2 font-bold">
                                <h3 className="text-center text-xl"> ⭐ {ele.title} ⭐</h3>
                                <div className="whight flex items-center justify-between w-full my-4">
                                    <span> الوزن : KG </span>


                                    {isInCart(ele.id) ? (
                                        <div className="number-control">
                                            <div  className="number-left"></div>
                                            <input 
                                            type="number"
                                            name="number" 
                                            className="number-quantity"
                                            value={product?.weight || ele.weight}
                                            min="1"
                                            />
                                            <div  className="number-right"></div>
                                        </div>
                                    ) : (
                                        <div className="number-control">
                                            <div onClick={() => handleDecrementWeight(ele.id)} className="number-left"></div>
                                            <input 
                                            type="number"
                                            name="number" 
                                            className="number-quantity"
                                            value={product?.weight || ele.weight}
                                            min="1"
                                            />
                                            <div onClick={() => handleIncrementWeight(ele.id)} className="number-right"></div>
                                        </div>
                                    )}

                                </div>
                                <div className="price w-full flex justify-between items-center mt-4 pb-2  dir-ltr ">
                                    <span className="text-xl"> {ele.price} EGP </span>

                                    {isInCart(ele.id) ? (
                                    <button
                                        style={{ backgroundColor: "#dc26262e" }}
                                        className="text-sm p-2 bg- rounded text-red-600 shadow shadow-gray-200 hover:scale-105 transition-transform flex items-center gap-2"
                                        onClick={() => removeFromCart(ele.id)}
                                    >
                                        <BsCartX size={20} /> إزالة من السلة
                                    </button>
                                ) : (
                                    <button
                                        style={{ backgroundColor: "#e1ece5" }}
                                        className="text-sm p-2 bg- rounded text-green-600 shadow shadow-gray-200 hover:scale-105 transition-transform flex items-center gap-2"
                                        onClick={() => addToCart(product)}
                                    >
                                        <BsCartPlus size={20} /> أضف إلى السلة
                                    </button>
                                )}

                                </div>
                            </div>
                        </div>
                    </motion.div>
                    }) : <> 


                        {divsToRender.map((ele, idx)=> {
                            return  <div className=" w-full md:w-1/3 p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-400">
                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-400">
                                    <svg
                                    viewBox="0 0 16 20"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                    className="w-10 h-10 text-gray-200 dark:text-gray-600">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"></path> 
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" ></path>
                                    </svg>
                                </div>
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                <div className="flex items-center mt-4">
                                <div>
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32 mb-2"></div>
                                    <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-400"></div>
                                </div>
                                </div>
                            <span className="sr-only">Loading...</span>
                        </div>
                        } )}
                       



                    
                    </>}

                   
                </AnimatePresence>
                    
                </div>


  

                {/* <motion.ul
                    initial={{
                        x: 200
                    }}
                    animate={{ x: 0 }}
                    transition={{ ease: "linear", duration: 0.2 }}
                    exit={{
                        x: 200
                    }}
                    className="flex items-center justify-start pt-24 text-xl flex-col bg-white text-black w-2/3 h-full  gap-7 fixed top-0 right-0 z-50 shadow-cardShadow  ">

                    <img onClick={() => setNav(!nav)} width="40" height="40" src={close} className="close absolute top-5 left-5 cursor-pointer border p-1 rounded transition-colors bg-black hover:bg-mainRed  " alt="close" />

                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Introduction"> Introduction  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="NutritionalTips"> Nutritional Tips  </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="BuyNow"> BuyNow   </a> </li>
                    <li> <a className="transition-all duration-300 hover:text-mainRed font-bold" href="#" data-scroll-to="Contact"> Contact </a> </li>

                </motion.ul> */}

                
                {/* <img src={lettuce} style={{height: "500px"}} className="absolute -right-40 top-2 -z-10 " alt="lettuce" />
                <img src={plant} style={{height: "500px"}} className="absolute -left-12 top-0  -z-10" alt="plant" />

                <img src={lettuce} style={{height: "500px"}} className="absolute -right-40 top-64 -z-10 " alt="lettuce" />
                <img src={plant} style={{height: "500px"}} className="absolute -left-12 top-64  -z-10" alt="plant" />

                <img src={lettuce} style={{height: "500px"}} className="absolute -right-40 -bottom-32 -z-10 " alt="lettuce" />
                <img src={plant} style={{height: "500px"}} className="absolute -left-12 bottom-0  -z-10" alt="plant" /> */}

            </div>

        </div>
    </>
}
