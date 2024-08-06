import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create Context
export const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Retrieve cart from session storage if it exists
        const savedCart = sessionStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const [products, setProducts] = useState();
    const [shipping, setShipping] = useState();
    const [loading, setLoading] = useState(true);

    async function getProducts() {

        try {
            let  response  = await axios.get("https://sheetdb.io/api/v1/ln5fv55llnhkn?sheet=DB" );
            if (response.status == 200 ) {
                
                const availableProducts = response.data.filter(product => product.Status == "TRUE");
                setProducts(availableProducts);

                setShipping(response.data[0].shipping)
                setLoading(false);
            }
            // catch the error 
        } catch (err) {

            alert("something Wrong happened please try again")
            setLoading(false);
        }
    }

    useEffect(() => {
        getProducts()
    }, []);


    // Update session storage whenever the cart changes
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    // Function to add items to the cart
    const addToCart = (item) => {

        const { id, price, weight } = item;
        const totalPrice = price * weight; 
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1, weight: item.weight } : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1, totalPrice  }];
        });
    };

    // Function to remove items from the cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(cartItem => cartItem.id !== id));
    };

    // Function to update the number of items in the cart
    const updateCartItemsNumber = (id, quantity) => {
        setCart((prevCart) => 
            prevCart.map(cartItem =>
                cartItem.id === id ? { ...cartItem, quantity } : cartItem
            )
        );
    };


    const updateWeight = (id, newVal) => {
        setProducts((prevProducts) => {
            return prevProducts.map(item => {
                if (item.id === id) {
                    const updatedWeight = Math.max((Number(item.weight) + Number(newVal)).toFixed(1), 0.5);
                    return { ...item, weight: updatedWeight };
                }
                return item;
            });
        });
    
        setCart((prevCart) => {
            return prevCart.map(item => {
                if (item.id === id) {
                    const updatedWeight = Math.max((Number(item.weight) + Number(newVal)).toFixed(1), 0.5);
                    return { ...item, weight: updatedWeight };
                }
                return item;
            });
        });
        getTotalCartPrice();
    };

    const getTotalCartPrice = () => {
        let totalPrice = 0
         cart.reduce((total, item) => {
            const totalPriceForItem = parseFloat(item.totalPrice) * (item.quantity || item.weight);
            totalPrice = total + totalPriceForItem
            return  totalPrice ;
        }, 0);
        return totalPrice < 250 ? totalPrice + parseInt(shipping) : totalPrice
    };


    const contextValues = {
        cart,
        products,
        loading,
        shipping,
        setCart,
        addToCart,
        removeFromCart,
        updateWeight,
        getTotalCartPrice,
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    );
};