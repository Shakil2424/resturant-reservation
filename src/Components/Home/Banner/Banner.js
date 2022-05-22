import React from 'react';
import banner from "../../../assets/images/chair.png";
import clockIcon from "../../../assets/icons/clock.svg"
import markerIcon from "../../../assets/icons/marker.svg"
import phoneIcon from "../../../assets/icons/phone.svg"
import './Banner.css'
const Banner = () => {
    return (
        <div className="mb-20">
            <div className="banner mb-28 md:mb-0">
            <div className="md:grid grid-cols-2 w-11/12 mx-auto h-[80vh]  items-center ">
                <div className="md:order-last">
                    <img className="md:w-9/12 mb-10 mx-auto" src={banner} alt="" />
                </div>
                <div className="">
                    <h2 className="text-5xl text-accent font-semibold w-10/12 mb-4">Your New Smile Starts Here</h2>
                    <p className="text-accent text-base mb-11">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn custom-btn">get started</button>
                </div>
            </div>
            </div>
            <div className="w-11/12 banner-shadow  mx-auto md:grid lg:grid-cols-3 gap-x-6  md:grid-cols-2">
                <div className="flex shadow-2xl mb-10 rounded-2xl py-10 items-center bg-gradient-to-r from-primary to-secondary">
                    <img className="mx-6 w-20 " src={clockIcon} alt="" />
                    <div className="">
                        <h5 className="text-xl text-white ">Opening Hours</h5>
                        <p className="text-base text-white mr-4">Lorem Ipsum is simply dummy text of the pri</p>
                    </div>
                </div>
                <div className="flex shadow-2xl mb-10 rounded-2xl py-10 items-center bg-accent">
                    <img className="mx-6  " src={markerIcon} alt="" />
                    <div className="">
                        <h5 className="text-xl text-white ">Visit our location</h5>
                        <p className="text-base text-white mr-4">Brooklyn, NY 10036, United States</p>
                    </div>
                </div>
                <div className="flex shadow-2xl mb-10 rounded-2xl py-10 items-center bg-gradient-to-r from-primary to-secondary">
                    <img className="mx-6  " src={phoneIcon} alt="" />
                    <div className="">
                        <h5 className="text-xl text-white ">Contact us now</h5>
                        <p className="text-base text-white mr-4">+000 123 456789</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;