import React from "react";
import AboutImg from '../assets/about-img.jpg'

const Contact = () => {
    return (
        <>
        <div className="flex flex-col h-full pt-4 gap-2 justify-between bg-slate-900 text-white">
            <div className="flex sm:flex-row px-4 gap-4 justify-evenly items-center py-4 flex-col-reverse">
<img src={AboutImg} alt="" className='sm:w-80 w-full h-80 rounded shadow-sm self-center' />
            <div className="flex flex-col items-center">
            <h2 className="text-4xl mb-3 uppercase font-bold">Where To Find Us</h2>
            <p className="mb-5 text-center">
                Sahyadri College of Engineering & Management (Autonomous)
                <br />
                Adyar, Karnataka 575029
            </p>
            <h3 className="text-2xl mb-2">Opening Hours</h3>
            <p className="m-0">Mon - Fri: 07:30 - 8:00</p>
            <p>Sat - Sun: 8:00 - 6:00</p>
            </div>
            </div>
        </div>
       
        </>
    );
}

export default Contact;