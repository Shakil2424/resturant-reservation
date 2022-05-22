
import React, { useState } from 'react';



const OrderModal = ({ food, handleOrder }) => {
    const { name, Price } = food;
    const [updatedPrice, SetUpdatedPrice] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const handlePrice = (e) => {
        let quantity = e.target.value;
        const pp = Price * quantity;
        SetUpdatedPrice(pp)
    }
    console.log(food);
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-9 font-bold">{name}</h3>
                    <form onSubmit={handleOrder} className="md:ml-16">
                        <input type="text" disabled value={name} className="input mb-3  input-sm input-bordered w-full max-w-xs" />

                        <input type="text" placeholder="Instructions, Ex:Extra Spicy" className="input mb-3   input-bordered w-full max-w-xs" />
                        <input type="number" onChange={handlePrice} placeholder="Quantity" className="input mb-3  input-bordered w-full max-w-xs" />
                        <input type="number" value={updatedPrice ? updatedPrice : Price} placeholder="Price" className="input mb-3  input-bordered w-full max-w-xs" />
                        <div className='my-4'>
                            <label class="flex items-center mt-4">
                                <input type="checkbox"  class="checkbox mr-2" />
                                <span>Self Service</span>
                            </label>
                            <label class="flex items-center mt-4">
                                <input type="checkbox"  class="checkbox mr-2" />
                                <span>Waiter Service(Extra 100 ৳)</span>
                            </label>
                        </div>
                        <button> <label type="submit" className="btn" htmlFor="order-modal">Add to Cart</label></button>
                    </form>
                    <p className='mt-4 font-semibold text-center'>Your Total Price: {totalPrice ? totalPrice : updatedPrice}</p>
                </div>
            </div>
        </div >
    );
};

export default OrderModal;