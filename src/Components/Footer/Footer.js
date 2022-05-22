import React from 'react';
import footerbg from '../../assets/images/footer.png';
const Footer = () => {
    return (
        <footer style={{
            background: `url(${footerbg})`,
            backgroundPosition: 'center'
        }} className="  ">
            <div className="footer w-10/12 mx-auto  p-10">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <footer className="footer footer-center p-4 md:mt-20 ">
                <div>
                    <p>Copyright © 2022 - All right reserved by <span className="text-secondary">Doctors Portal</span> Ltd</p>
                </div>
            </footer>
        </footer>
    );
};

export default Footer;