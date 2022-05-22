import React from 'react';
import cavity from '../../../assets/images/cavity.png'
import fluoride from '../../../assets/images/fluoride.png'
import whitening from '../../../assets/images/whitening.png'
const Service = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h5 className="text-primary text-center font-semibold text-xl font">OUR SERVICE</h5>
            <h2 className="text-center text-accent text-4xl mt-2 mb-16">Service We Provide</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-y-14 gap-x-8 mb-24">
                <div className="text-center rounded-lg shadow-xl">
                    <img className=" mt-11 mx-auto w-24" src={fluoride} alt="" />
                    <h3 className="text-accent text-xl mb-2 mt-9">Fluoride Treatment</h3>
                    <p className="text-black text-base mx-14 mb-9">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className="text-center rounded-lg shadow-xl">
                    <img className=" mt-11 mx-auto w-24" src={cavity} alt="" />
                    <h3 className="text-accent text-xl mb-2 mt-9">Cavity Filling</h3>
                    <p className="text-black text-base mx-14 mb-9">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
                <div className="text-center rounded-lg shadow-xl">
                    <img className=" mt-11 mx-auto w-24" src={whitening} alt="" />
                    <h3 className="text-accent text-xl mb-2 mt-9">Teeth Whitening</h3>
                    <p className="text-black text-base mx-14 mb-9">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </div>
    );
};

export default Service;