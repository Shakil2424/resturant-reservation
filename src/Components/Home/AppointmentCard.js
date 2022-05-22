import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase/firebase.init';
import Loading from '../Loading/Loading';

const AppointmentCard = ({ service, btnhandler }) => {
    const { name, slots, img } = service;
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading/>
    }
    return (
        <div className="">
            <div class="card w-96 bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}!</h2>
                    <h4 className="text-accent ">{slots?.length ? slots[0] : ''}</h4>
                    <h4 className="text-accent ">{slots?.length ? `${slots.length} SPACES AVAILABLE ` : 'PlEASE TRY ANOTHER DAY'}</h4>
                    <div class="card-actions">
                    {
                        user ? <label disabled={slots?.length === 0} onClick={() => btnhandler(service)} className="btn mt-5 custom-btn" htmlFor="appointment-modal">Book appointment</label> : <Link to='/login' className="btn-link ">login to appointment</Link>
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;