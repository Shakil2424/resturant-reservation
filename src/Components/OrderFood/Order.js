import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import orderBanner from '../../assets/images/orderBanner.jpg'
import OrderCard from './OrderCard';
import OrderModal from './OrderModal';
const Order = () => {
    const [foods, setFoods] = useState([]);
    const [selectedFood, setSelectedFood] = useState({});
    useEffect( ()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    //handle add to cart button
    const handleAddToCart = (food)=>{
        setSelectedFood(food)
    }

    // handle add to cart button Modal
    const handleOrder = e=>{
        e.preventDefault()
        console.log('cart Added');
    }

    return (
        <div>
            <section>
                <div>
                    <img className='h-[39rem] relative w-full' src={orderBanner} alt='' />
                    <h2 className='absolute top-2/4 left-1/4 lg:top-1/3 uppercase text-rose-600 lg:left-1/3 md:text-6xl text-3xl  lg:text-8xl font-semibold'>Shwarma King</h2>
                </div>
                <h2 className='text-center my-10 text-5xl font-semibold'>Menu Items</h2>
                <div className='md:grid w-10/12 mx-auto grid-cols-6'>
                <div className=' gap-10 col-span-5 mx-auto md:grid lg:grid-cols-3 md:grid-cols-2'>
                    {
                        foods.map(food=><OrderCard handlebtn={handleAddToCart} key={food._id} food={food}></OrderCard>)
                    }
                </div>
                <div className='h-screen col-span-1 rounded-md mb-20 bg-[#fdf2f7]'>
                    <h2></h2>
                </div>
                </div>
                    {
                       selectedFood ? <OrderModal handleOrder={handleOrder} food={selectedFood}></OrderModal> : '' 
                    }
            </section>
        </div>
    );
};

export default Order;