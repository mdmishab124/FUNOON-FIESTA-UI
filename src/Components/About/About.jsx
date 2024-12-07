import React from 'react';
import HomeImg from '../../assets/img/home.png';
// motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../FrameMotion/variants'

const About = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    speed: 300,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
    ]
  };

  return (
    <div className="mx-auto flex flex-col justify-center  lg:py-14 px-4 lg:px-20 min-h-screen">
      <div className="w-full flex justify-center items-center h-full">
        <div className="flex flex-col md:flex-row w-full md:w-3/4 gap-12">
          {/* Content Section */}
          <motion.section
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            className="w-full md:w-3/5 flex justify-center items-center">
            <div className="w-3/4 text-center md:text-left mt-12 md:mt-0">
              <h1 className="text-4xl lg:text-7xl font-semibold text-primary">Funoon Fiesta</h1>
              <p className="mt-4 text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta et ratione illo quibusdam dolorum magni quaerat
                velit quis perspiciatis molestiae neque tempore nam iste vitae maxime earum, animi consequatur corporis at voluptate
                laboriosam odio nisi hic quas? Suscipit, ipsam fuga, rerum commodi.
              </p>
            </div>
          </motion.section>
          {/* Image Section */}
          <motion.section 
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.7 }}
          className="w-full md:w-2/5 flex justify-center items-center">
            <div className="w-48 lg:w-64">
              <img src={HomeImg} alt="Funoon Fiest" className="w-full h-auto" />
            </div>
          </motion.section>
        </div>
      </div>

      {/* Slider Section */}
      {/* <div className="flex justify-center items-center mt-10 lg:mt-14">
        <div className="w-full md:w-3/4">
          <Slider {...settings} className="w-full flex justify-center">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="p-3">
                <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 bg-primary rounded-lg overflow-hidden flex justify-center items-center text-white text-lg font-semibold">
                  {index + 1}
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div> */}
      <div class="flex space-x-16 overflow-hidden mt-10 md:mt-32">
        <div class="flex animate-loop-scroll space-x-16">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 1" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 2" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 3" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 4" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 5" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 6" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 7" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 8" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 9" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 10" />
        </div>
        <div class="flex animate-loop-scroll space-x-16" aria-hidden="true">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ee9f161-df19-4fa7-a2a6-edf9acf0e0d6?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 1" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/80480f8a-69ad-4c30-88ba-f4e7ee08fc51?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 2" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/140d376c-13f2-4823-b397-b3de733bf560?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 3" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ae217f1-b695-4661-bd3d-6440eebc2c5c?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 4" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/67017079-51e1-4245-9bf1-b5957eb66c74?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 5" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/515313ac-7ec9-4c6e-95db-80dac2f8b960?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 6" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c513fc32-3ab9-4cca-911e-0b2642ac7206?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 7" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/5731a5a7-689f-49ae-abf1-6e6dc00c2043?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 8" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb51d286-530f-42be-9e91-9c850522f127?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 9" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/44ba8437-f6fd-4a51-bfd3-262d7528f7a4?apiKey=7e8b177c7c374d8abaf3aebf27f1c17d&" class="max-w-10 md:max-w-20" alt="Image 10" />
        </div>
      </div>


    </div>
  );
};

export default About;
