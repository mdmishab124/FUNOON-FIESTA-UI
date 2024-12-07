import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import html2canvas from 'html2canvas';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';
import posterImage from '../../assets/img/poster.jpeg';
import Medal1 from '../../assets/img/medal1.png';
import Medal2 from '../../assets/img/medal2.png';
import Medal3 from '../../assets/img/medal3.png';

const dummyPrograms = [
  { id: 1, Name: 'Program 1', Category: 'Category 1', Stage: 'Stage 1', Records: 10 },
  { id: 2, Name: 'Program 2', Category: 'Category 2', Stage: 'Stage 2', Records: 15 },
  { id: 3, Name: 'Program 3', Category: 'Category 3', Stage: 'Stage 3', Records: 20 },
];

const ResultPage = () => {
  const { id } = useParams();
  const program = dummyPrograms.find((program) => program.id === parseInt(id));
  const containerRef = useRef(null);

  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  // Preload background image
  useEffect(() => {
    const img = new Image();
    img.src = posterImage;
    img.onload = () => setBgImageLoaded(true);
  }, []);

  const handleDownload = async () => {
    if (containerRef.current) {
      const canvas = await html2canvas(containerRef.current);
      const image = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = image;
      link.download = `${program.Name}.png`;
      link.click();
    }
  };

  if (!program) {
    return <div className="text-center">Program not found</div>;
  }

  // Poster data for Swiper
  const posters = [
    {
      title: 'RESULT (Onstage)',
      subtitle: 'KADHA PRASANGAM (BOYS)',
      content: [
        { name: 'Shanid PT & Team', place: 'KAMAR', medal: Medal1 },
        { name: 'Asnan PT & Team', place: 'HILAL', medal: Medal3 },
        { name: 'Fadhlul Abid KP & Team', place: 'BADR', medal: Medal2 },
      ],
    },
    {
      title: 'RESULT (Offstage)',
      subtitle: 'ELOCUTION (GIRLS)',
      content: [
        { name: 'Fathima Zain', place: 'SANA', medal: Medal1 },
        { name: 'Ayesha Noor', place: 'AMMAR', medal: Medal2 },
        { name: 'Maryam Siddiq', place: 'HILAL', medal: Medal3 },
      ],
    },
    {
      title: 'RESULT (Onstage)',
      subtitle: 'DRAMA (MIXED)',
      content: [
        { name: 'Hamid PK & Team', place: 'BADR', medal: Medal1 },
        { name: 'Rashid CA & Team', place: 'KAMAR', medal: Medal2 },
        { name: 'Anas SK & Team', place: 'NAJMA', medal: Medal3 },
      ],
    },
  ];

  return (
    <>
    <div className='flex justify-center items-center mt-14 flex-col'>
                <div className="bg-gray-400 px-8 py-2 rounded-full -mb-6 z-10 font-semibold text-2xl"><h1>SPEACH MLM</h1></div>
                <div className='bg-secondery w-full md:w-3/4 h-auto py-8 md:rounded-[61px] flex justify-center items-center flex-col md:flex-col gap-8'>
                    <div className=' grid grid-cols md:grid-cols-2 gap-8 mt-4'>
                        <div className="flex flex-row justify-center md:justify-start items-center">
                            <div className="w-20 h-20  rounded-full overflow-hidden">
                                <img src={Medal1} alt="" className="w-full h-full object-cover p-2" />
                            </div>
                            <div className='leading-tight m-3 flex flex-col'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-none'>Muhammed Sajmal</h1>
                                <h1 className='text-xl md:text-2xl font-light uppercase leading-none'>Kamar</h1>
                            </div>
                        </div>
                        <div className="flex flex-row justify-start items-center">
                            <div className="w-20 h-20  rounded-full overflow-hidden">
                                <img src={Medal3} alt="" className="w-full h-full object-cover p-2" />
                            </div>
                            <div className='leading-tight m-3 flex flex-col'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-none'>Ahmad Anshad</h1>
                                <h1 className='text-xl md:text-2xl font-light uppercase leading-none'>Kamar</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-row justify-start items-center">
                            <div className="w-20 h-20  rounded-full overflow-hidden">
                                <img src={Medal2} alt="" className="w-full h-full object-cover p-2" />
                            </div>
                            <div className='leading-tight m-3 flex flex-col'>
                                <h1 className='text-xl md:text-2xl font-semibold leading-none'>MuhammedMishab</h1>
                                <h1 className='text-xl md:text-2xl font-light uppercase leading-none'>Kamar</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      <div className="flex justify-center items-center mt-14 flex-col py-12">
        

        {/* Swiper for posters */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper w-full md:w-3/4 py-8"
        >
          {posters.map((poster, index) => (
            <SwiperSlide key={index}>
              <div
                ref={containerRef}
                className="relative w-[50vh] h-auto bg-cover bg-center rounded-2xl shadow-lg p-8 mb-8"
                style={{
                  backgroundImage: `url(${posterImage})`,
                }}
              >
                <div className="absolute top-4 left-4">
                  <img src="/path-to-your-logo.png" alt="Logo" className="w-16" />
                </div>
                <div className="text-center text-white">
                  <h1 className="text-2xl font-bold mb-2">{poster.title}</h1>
                  <h2 className="text-xl font-semibold">{poster.subtitle}</h2>
                  <p className="italic text-md">"മാധിരികളില്ലാത്ത കഥ പറയുന്നവര്‍"</p>
                </div>

                <div className="mt-10">
                  <div className="space-y-4">
                    {poster.content.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2 bg-white bg-opacity-20 rounded-2xl"
                      >
                        <span className="font-bold text-lg">
                          <img src={item.medal} alt="" className="w-8 object-cover" />
                        </span>
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="text-sm text-white">{item.place}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Download Button */}
        <button
          onClick={handleDownload}
          className="mt-6 px-6 py-3 bg-blue-500 text-white text-xl rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Download as Image
        </button>
      </div>
    </>
  );
};

export default ResultPage;
