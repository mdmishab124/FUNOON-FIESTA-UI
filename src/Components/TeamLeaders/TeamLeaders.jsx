import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper';
import './TeamLeaders.css'
import Leader1 from '../../assets/img/11.png'
import Leader2 from '../../assets/img/21.png'
import Leader3 from '../../assets/img/31.png'

const TeamLeaders = () => {
    return (
        <div className='container mx-auto py-4 lg:py-14'>
            <div className='w-full'>
                <section className="py-12">
                    <div className="mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8"> {/* Increased max width */}
                        <div className="mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-black leading-tight">
                                Team <span className='font-extralight'>Leaders</span>
                            </h2>
                        </div>

                        <Swiper
                            slidesPerView={1} // Updated to 1 for mobile
                            centeredSlides={true}
                            initialSlide={1}
                            spaceBetween={10} // Adjusted space for smaller screens
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                }
                            }}
                            modules={[Autoplay, Pagination]}
                            className="team-swiper"
                        >   
                            {[Leader1, Leader2, Leader3].map((leader, index) => (
                                <SwiperSlide key={index}>
                                    <div className="p-2 max-w-[300px] mx-auto">
                                        <div className="rounded-full w-full aspect-square overflow-hidden">
                                            <img
                                                className="w-full h-auto object-cover p-8"
                                                src={leader}
                                                alt="avatar"
                                            />
                                        </div>
                                        <h1 className='text-center text-xl  font-semibold uppercase mt-0'>
                                            {["Sajmal Muhammed", "Ahmad Sajmal", "Sajmal"][index]}
                                        </h1>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default TeamLeaders;
