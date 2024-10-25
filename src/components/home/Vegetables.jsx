import React, { useState } from 'react';
import { vegetables } from '../../data/Data';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/CartSlice';

const Vegetables = () => {
    const dispatch = useDispatch();

    // State to manage alert visibility and message
    const [alert, setAlert] = useState({ visible: false, message: '' });

    // Function to handle adding to cart
    const handleAddToCart = (vegetable) => {
        dispatch(addToCart(vegetable));
        setAlert({ visible: true, message: `${vegetable.name} added to cart!` });

        // Hide alert after 3 seconds
        setTimeout(() => {
            setAlert({ visible: false, message: '' });
        }, 3000);
    };

    return (
        <div className='mt-40 container ml-auto mr-auto'>
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
            <div className='flex flex-col mb-10 mx-4 md:mx-20 lg:flex lg:justify-between lg:flex-row lg:mx-10 lg:gap-10'>
                <h1 className='text-3xl font-semibold mb-6 lg:text-4xl lg:flex lg:justify-center lg:items-center' style={{color: '#45595b'}}>Fresh Organic Vegetables</h1>
            </div>
            <div className='mx-4 sm:mx-20 md:grid md:grid-cols-2 md:gap-4 lg:mx-10 lg:grid-cols-3 xl:grid-cols-4'>
                {vegetables.map((val) => {
                    return (
                        <div key={val.id} className='box border rounded-lg border-orange-400 mx-auto mb-6 w-full'>
                            <div className='w-full relative overflow-clip'>
                                <img className='hover:scale-150 duration-500 w-full rounded-lg' src={val.img} alt="" />
                                <span className='absolute top-3 right-3 text-white text-lg py-1 px-4 rounded-xl' style={{backgroundColor: '#81c408'}}>Vegetables</span>
                            </div>
                            <div className='text-center'>
                                <h3 className='text-2xl mt-5 font-semibold' style={{color: '#45595b'}}>{val.name}</h3>
                                <p className='leading-normal font-normal my-4 w-10/12 mx-auto' style={{color: '#020e1ccf'}}>{val.desc}</p>
                            </div>
                            <div className='flex justify-between items-center mb-8 mx-6 xl:mx-3'>
                                <p className='font-semibold text-lg' style={{color: '#0c363b'}}>${val.price} / Kg</p>
                                <div className='border rounded-full border-orange-400 py-2 px-4 lg:px-2'>
                                    <span className='pr-4 lg:pr-1' style={{color: '#81c408'}}>{val.icon}</span>
                                    <button onClick={() => handleAddToCart(val)} className='font-semibold' style={{color: '#81c408'}}>{val.cart}</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Vegetables;
