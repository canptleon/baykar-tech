//@ts-nocheck
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function LoveUs() {

  const swiperRef = useRef(null);

  const slideToNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slideToPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="they-love-us">
      <div className="they-love-us-body">
        <div className="row w-100 mx-auto">
          <div className="they-love-us-head d-flex justify-content-between align-center">
            <h2>Because they love us</h2>
            <div className="d-flex flex-row align-center gap-2">
              <img src="/images/swiper-arrow-left.svg" alt="Swiper Arrow Left" className="swipe-arrow-left" onClick={() => slideToPrev()} />
              <img src="/images/swiper-arrow-right.svg" alt="Swiper Arrow Right" className="swipe-arrow-right" onClick={() => slideToNext()} />
            </div>
          </div>
          <div className="they-love-us-swiper">
            <span className="they-love-us-swiper-bg"></span>
            <div className="swiper">
              <Swiper
                spaceBetween={24}
                slidesPerView={3.5}
                centeredSlides={true}
                loop={true}
                ref={swiperRef}
                breakpoints={{
                  0: {
                    slidesPerView: 1.3,
                    spaceBetween: 16,
                  },
                  768: {
                    slidesPerView: 3.5,
                  },
                }}
              >
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="swiper-item">
                    <img src="/images/swiper-item-logo.png" alt="Title" className="swiper-img" />
                    <p>Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.</p>
                    <div className="d-flex flex-row align-items-center">
                      <img src="/images/user-thumb.png" alt="User Avatar" className="swiper-avatar" />
                      <p className="flex flex-col">Hellen Jummy <span>Team Lead</span></p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LoveUs;