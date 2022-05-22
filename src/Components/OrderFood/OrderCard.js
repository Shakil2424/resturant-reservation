import React from 'react';

const OrderCard = ({food, handlebtn}) => {
    const {name, img, Price, description}= food;
    
    return (
        <div>
            <div class="card mt-4 w-96 bg-base-100 shadow-xl">
                <figure><img src={img} alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                       {name}
                        
                    </h2>
                    <p>{description}</p>
                    <p className='font-semibold'> Price : {Price}৳</p>
                    <div class="card-actions justify-end">
                        <label  onClick={()=>{handlebtn(food)}} className="btn mt-5 custom-btn" htmlFor="order-modal">Add to Cart</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderCard;