import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from '../Loading/Loading';


const AppointmentModal = ({ service, date }) => {
    const { name, slots } = service;
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate()
    if(loading){
        return <Loading/>
    }
    const handleformsubmit = (e) => {
        e.preventDefault();
        const resturantName = name
        navigate('/order')


    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg mb-9 font-bold">{name}</h3>
                    <form onSubmit={handleformsubmit} className="md:ml-16">
                        <input type="text" disabled value={format(date, 'PPPP')} className="input mb-3  input-sm input-bordered w-full max-w-xs" />
                        <select className="select select-sm mb-3 select-bordered w-full max-w-xs">
                           {
                               slots?.map((slot, i)=><option key={i} value={slot}>{slot}</option>)
                           }
                        
                        </select>
                        <select className="select select-sm mb-3 select-bordered w-full max-w-xs">
                        <option value = {1}>1 person</option>
                        <option value = {2} selected>2 person</option>
                        <option value = {4}>4 person</option>
                        <option value = {5}>5 person</option>
                        <option value = {6}>6 person</option>
                        <option value = {8}>8 person</option>
                        <option value = {10}>10 person</option>
                        <option value = {15}>15 person</option>
                        <option value = {20}>More than 20</option>
                        </select>
                        <input type="text" value={user?.displayName} disabled placeholder="Your Name" className="input mb-3   input-bordered w-full max-w-xs" />
                        <input type="email" value={user?.email} disabled placeholder="Your Email" className="input mb-3   input-bordered w-full max-w-xs" />
                        <input type="number" placeholder="Your Phone" className="input mb-3  input-bordered w-full max-w-xs" />
                       <button> <label type="submit" className="btn" htmlFor="appointment-modal">Submit</label></button>
                    </form>
                </div>
            </div>
        </div >
    );
};

export default AppointmentModal;