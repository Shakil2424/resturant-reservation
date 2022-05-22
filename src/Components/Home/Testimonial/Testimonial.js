import React from 'react';
import quote from '../../../assets/icons/quote.svg';
const Testimonial = () => {
    return (
        <section>
            <div className="flex items-center w-11/12 mx-auto mb-20 justify-between">
                <div className="">
                    <h2 className="text-primary font-bold">Testimonial</h2>
                    <h4 className="text-accent text-4xl">What Our Patients Says</h4>
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
    );
};

export default Testimonial;