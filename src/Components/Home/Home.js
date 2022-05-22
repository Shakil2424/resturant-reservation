import React, { useEffect, useState } from 'react';
import banner from "../../assets/images/banner.jpg";
import quote from '../../assets/icons/quote.svg';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';
import AppointmentCard from './AppointmentCard';

import Service from './Service/Service';
import AppointmentModal from './AppointmentModal';
const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({})
   
    useEffect(() => {
        fetch('resturants.json')
        .then(res=>res.json())
        .then(data => setServices(data))
    },[]);
    const appointmentBtnHandler = (service) =>{
        setTreatment(service)
        
    }
  
    return (
        <div>
             <div className="banner mb-28 md:mb-0">
                 <h2 className="text-center text-2xl mb-4 md:text-5xl tracking-wide pt-5 font-semibold">Find your table for any occasion</h2>
            <div className="md:grid grid-cols-2 w-8/12  mx-auto h-[80vh] items-center ">
                <div className="md:order-last">
                    <img className="md:w-full mb-10 rounded-b-lg mx-auto" src={banner} alt="" />
                </div>
                <div className="">
                <DayPicker 
                mode="single"
                selected={selectedDate}
                onSelect={setSelectedDate}
                />
                </div>
            </div>
            </div>
            <div className="banner-shadow md:pt-10">
                <h2 className="text-center text-primary text-lg md:text-2xl mb-16 md:mb-28">Available Reservation on {format(selectedDate, 'PPPP')}</h2>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-9 w-11/12 mb-32 mx-auto mb">
                {
                    services.map(service => <AppointmentCard btnhandler={appointmentBtnHandler} key={service._id} service={service}></AppointmentCard>)
                }
                </div>
            </div>
            <AppointmentModal date={selectedDate} service={treatment}></AppointmentModal>
            <Service></Service>
            <section>
            <div className="flex items-center w-11/12 mx-auto mb-20 justify-between">
                <div className="">
                    <h2 className="text-primary font-bold">Testimonial</h2>
                    <h4 className="text-accent text-4xl">What Our clients Says</h4>
                </div>
                <div className="">
                    <img className="md:w-48 w-24 " src={quote} alt="" />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-x-14">
                <div className="card w-96 bg-base-100 shadow-xl mb-11">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions">
                            <div className="flex items-center mt-9">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                                        <img className="" alt="" src="https://api.lorem.space/image/face?hash=3274" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2>Winson Herry</h2>
                                    <h5>California</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-11">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions">
                            <div className="flex items-center mt-9">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                                        <img className="" alt="" src="https://api.lorem.space/image/face?hash=3154" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2>Winson Herry</h2>
                                    <h5>California</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mb-11">
                    <div className="card-body">
                        <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                        <div className="card-actions">
                            <div className="flex items-center mt-9">
                                <div className="avatar">
                                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-4">
                                        <img alt="" className="" src="https://api.lorem.space/image/face?hash=3174" />
                                    </div>
                                </div>
                                <div className="">
                                    <h2>Winson Herry</h2>
                                    <h5>California</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Appointment;