import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import orderBanner from '../../assets/images/orderBanner.jpg'
import OrderCard from './OrderCard';
const OrderFood = () => {
    // const { resturantName } = useParams()
    const [foods, setFoods] = useState([]);
    useEffect( ()=>{
        fetch('foods.json')
        .then(res=>res.json())
        .then(data=>setFoods(data))
    },[])

    console.log(foods);
    return (
        <div>
            <section>
                <div>
                    <img className='h-[39rem] relative w-full' src={orderBanner} alt='' />
                    {/* <h2 className='absolute top-1/3 uppercase text-rose-600 left-1/3 text-8xl font-semibold'>{resturantName}</h2> */}
                </div>
                <h2 className='text-center my-10 text-5xl font-semibold'>Menu Items</h2>
                <div>
                    <h3>{foods.length}</h3>
                </div>
            </section>
        </div>
    );
};

export default OrderFood;