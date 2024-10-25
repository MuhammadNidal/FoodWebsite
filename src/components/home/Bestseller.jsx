import React, { useState } from 'react';
import { bsetseller } from '../../data/Data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const Bestseller = () => {
    const dispatch = useDispatch();

    // State to manage alert visibility and message
    const [alert, setAlert] = useState({ visible: false, message: '' });

    // Function to handle adding to cart
    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        setAlert({ visible: true, message: `${product.name} added to cart!` });

        // Hide alert after 3 seconds
        setTimeout(() => {
            setAlert({ visible: false, message: '' });
        }, 3000);
    };

    return (
        <div className='mt-40'>
            {alert.visible && (
                <div 
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px', // Move to the right side
                        backgroundColor: '#81c408',
                        color: 'white',
                        padding: '15px 30px', // Increased size
                        borderRadius: '8px',
                        zIndex: 1000,
                        transition: 'opacity 0.5s ease',
                        opacity: alert.visible ? 1 : 0,
                    }}
                >
                    {alert.message}
                </div>
            )}
            <div className='lg:mx-20 '>
                <h1 className='text-3xl md:text-5xl xl:text-6xl font-bold mx-auto text-center' style={{color: '#45595b'}}>Bestseller Products</h1>
                <p className='mx-4 text-center mt-4 w-auto ' style={{color: '#45595b'}}>Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
                    {bsetseller.map((val) => {
                        return (
                            <div key={val.id} className='flex justify-evenly items-center mt-8 mx-4 sm:mx-20 py-8 md:justify-around md:mx-32 lg:mx-4' style={{backgroundColor: '#f4f6f8'}}>
                                <div className='img-sell lg:ml-12 xl:ml-2'>
                                    <img className='w-full h-full img-best' src={val.img} alt="" />
                                </div>
                                <div>
                                    <h5 className='py-2 mb-4 text-lg font-semibold w-20' style={{color: '#45595b'}}>{val.name}</h5>
                                    <ul className='flex my-3'>
                                        <li style={{color: '#81c408'}}>{val.star}</li>
                                        <li style={{color: '#81c408'}}>{val.star}</li>
                                        <li style={{color: '#81c408'}}>{val.star}</li>
                                        <li style={{color: '#81c408'}}>{val.star}</li>
                                        <li style={{color: '#45595b'}}>{val.star}</li>
                                    </ul>
                                    <p className='text-lg font-semibold ' style={{color: '#45595b'}}>${val.price} / Kg</p>
                                    <div className='border rounded-full border-orange-400 mt-6 py-2 px-4 lg:pr-2'>
                                        <span className='pr-4 lg:pr-1' style={{color: '#81c408'}}>{val.icon}</span>
                                        <button onClick={() => handleAddToCart(val)} className='font-semibold' style={{color: '#81c408'}}>{val.cart}</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Bestseller;
