import React from 'react';
import Email from '../../assets/img/email.png';
import User from '../../assets/img/user.png';
import Smartphone from '../../assets/img/smartphone.png';

const Contact = () => {
    return (
        <div className="mx-auto py-4 lg:py-14 px-4 lg:px-20 min-h-screen flex justify-center items-center" id='contact'>
            <div className="w-full flex justify-center">
                <div className="flex flex-col md:flex-row w-full md:w-3/4 lg:px-10">
                    <div className="w-full rounded-3xl bg-secondery flex flex-col md:flex-row justify-center items-center p-4">
                        <div className="w-full md:w-1/2 p-4 md:p-10 flex justify-center items-center">
                            <img src={Email} alt="Contact" className="w-full max-w-xs h-auto object-contain" />
                        </div>
                        <div className="w-full md:w-1/2 p-4 md:p-8">
                            <form action="" className="w-full flex flex-col gap-5">
                                <div className="flex items-center bg-gray-300 rounded-2xl h-12 pl-4 overflow-hidden ">
                                    <div className="flex items-center justify-center w-10">
                                        <img src={User} alt="User icon" className="h-6 w-6" />
                                    </div>
                                    <input type="text" className="w-full bg-transparent px-2 text-gray-700 outline-none focus:outline-none focus:ring-0 border-none" placeholder="Your Name" />
                                </div>

                                <div className="flex items-center bg-gray-300 rounded-2xl h-12 pl-4 overflow-hidden">
                                    <div className="flex items-center justify-center w-10">
                                        <img src={Smartphone} alt="Smartphone icon" className="h-6 w-6" />
                                    </div>
                                    <input type="text" className="w-full bg-transparent px-2 text-gray-700 focus:outline-none focus:ring-0 border-none" placeholder="Your Phone" />
                                </div>

                                <div className="bg-gray-300 rounded-2xl h-32 pl-4 overflow-hidden">
                                    <textarea className="w-full bg-transparent px-2 py-2 text-gray-700 focus:outline-none h-full resize-none border-none focus:ring-0" placeholder="Your Message"></textarea>
                                </div>

                                <button type="submit" className="mt-4 bg-blue-500 text-white rounded-2xl h-12 w-full font-semibold hover:bg-blue-600 transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
