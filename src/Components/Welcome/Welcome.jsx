import React from 'react'
// images
import HomeImg from '../../assets/img/festlogo.png'
import EventImg from '../../assets/img/event.png'
import DaysImg from '../../assets/img/days.png'
import StudentImg from '../../assets/img/student.png'
// link
import { Link } from 'react-router-dom';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../FrameMotion/variants'

const Welcome = () => {
    return (
        <>
            <div className='mx-auto flex flex-col justify-center py-12 mt-8'>
                <div className='flex justify-center items-center py-6'>
                    <div className='flex flex-col md:flex-row w-3/4'>
                        {/* contant section */}
                        <motion.section
                            variants={fadeIn("right", 0.3)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.7 }}
                            className='w-full md:w-3/5 flex justify-center items-center'>
                            <div className='w-full md:w-3/4 '>
                                <h1 className='text-3xl md:text-4xl font-semibold groupnumbers py-4'>Welcome to Funoon Fiesta</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Soluta et ratione illo quibusdam dolorum magni quaerat
                                    velit quis perspiciatis molestiae neque tempore nam iste

                                </p>
                                <Link type="button" to="/search" className='mt-3 h-12 w-3/4 md:w-2/6 flex items-center justify-center p-4 text-black bg-[#B7B7B7] rounded-md'>Check your Results</Link>
                            </div>
                        </motion.section >
                        {/* image section */}
                        <motion.section 
                        variants={fadeIn("left", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className='w-full md:w-2/5 hidden md:block felx justify-center items-center'>
                            <div className='flex justify-center items-center'>
                                <img src={HomeImg} alt="" className='w-60' />
                            </div>
                        </motion.section>
                    </div>
                </div>
                {/* Footer section */}
                <motion.div 
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                className='flex justify-center items-center mt-12'>
                    <div className='bg-secondery w-full md:w-3/4 h-[400px] md:h-48 rounded-t-[71px]  md:rounded-[61px] mt-20 flex justify-center items-center flex-col md:flex-row gap-8'>
                        <div className=' grid grid-cols-2 md:grid-cols-2 gap-8'>
                            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={DaysImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none text-black'>04</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none text-black'>Days</h1>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row justify-center items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={EventImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none text-black'>100</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none text-black'>Events</h1>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col md:flex-row justify-start items-center">
                                <div className="w-20 h-20 bg-primary rounded-full overflow-hidden">
                                    <img src={StudentImg} alt="" className="w-full h-full object-cover p-5" />
                                </div>
                                <div className='leading-tight m-3 flex flex-row md:flex-col'>
                                    <h1 className='text-xl md:text-2xl font-semibold leading-none text-black'>1300+</h1>
                                    <h1 className='text-xl md:text-2xl font-semibold uppercase leading-none text-black'>Students</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default Welcome
