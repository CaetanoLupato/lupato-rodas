import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './HeroCarousel.css'; 
import slide1 from '../../assets/slide1.png';
import slide2 from '../../assets/slide2.png';
import slide3 from '../../assets/slide3.png';

function HeroCarousel() {
    return (
        <div id="inicio" className="hero-carousel-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: true,
                }}
            >
                
                <SwiperSlide>
                    <img src={slide1} alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="Slide 2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="Slide 3" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default HeroCarousel;