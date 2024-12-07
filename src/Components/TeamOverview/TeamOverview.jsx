import React from 'react'

// css
import './TeamOverview.css'

// images
import First from '../../assets/img/medal1.png'
import Second from '../../assets/img/medal2.png'
import Third from '../../assets/img/medal3.png'
import Live from '../../assets/img/live.png'
import Youtube from '../../assets/img/youtube.png'

// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../FrameMotion/variants'

const TeamOverview = () => {
    return (
        <>
            <div className='mx-auto py-4 lg:py-14  lg:mx-20'>
                <div className='flex justify-center items-center flex-col gap-12'>
                    <div className='flex flex-col md:flex-row w-3/4'>
                        {/* contant section */}
                        <motion.section 
                        variants={fadeIn("down", 0.3)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.7 }}
                        className="w-full flex justify-center items-center h-38 gap-5 mt-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5 md:px-10">
                                <div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">&nbsp;01</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl font-extralight text-black">Raziq Art <span>00</span></h1>
                                        <img src={First} alt="" className='h-full w-auto object-contain' />
                                    </div>
                                </div>

                                <div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">02</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl text-black font-extralight">Raziq Art <span>00</span></h1>
                                        <img src={Second} alt="" className='h-full w-auto object-contain' />
                                    </div>
                                </div>

                                <div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">03</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl  text-black font-extralight">Raziq Art <span>00</span></h1>
                                        <img src={Third} alt="" className='h-full w-auto object-contain' />
                                    </div>
                                </div>

                                <div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">04</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl text-black  font-extralight">Raziq Art <span>00</span></h1>
                                    </div>
                                </div><div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">05</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl text-black  font-extralight">Raziq Art <span>00</span></h1>
                                    </div>
                                </div><div className="h-12 w-full flex bg-[#B7B7B7] rounded-r-xl">
                                    <h1 className="p-2 text-4xl font-extralight groupnumbers">06</h1>
                                    <div className="w-full bg-secondery h-full flex p-5 rounded-r-xl py-2 justify-between items-center">
                                        <h1 className="text-xl lg:text-3xl text-black  font-extralight">Raziq Art <span>00</span></h1>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
                {/* Footer section */}
                <motion.div 
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
                className='flex justify-center items-center mt-10 flex-col'>
                    <div className='w-24 h-24 bg-slate-100 rounded-full mt-16 mb-[-50px] -z-0 flex justify-center items-center'>
                        <div className='w-20 h-20 bg-secondery rounded-full'>
                            <img src={Live} alt="" className='h-full w-auto object-contain p-2' />
                        </div>
                    </div>
                    <div className='bg-secondery w-full md:w-3/4 h-96 md:h-60 rounded-none md:rounded-2xl flex justify-center py-52 lg:py-40 items-center flex-col md:flex-row gap-8 md:gap-52'>
                        <div className='w-52 h-32 bg-white rounded-xl flex items-center justify-center'>
                            <img src={Youtube} alt="" className='h-full w-auto object-contain p-2'/>
                        </div>
                        <div className='w-52 h-32 bg-white rounded-xl flex items-center justify-center'>
                            <img src={Youtube} alt="" className='h-full w-auto object-contain p-2'/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default TeamOverview
