'use client'

import React, { Component } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';
import bannerimage from '../../../public/images/slider/banner1.png'
import '../../global.css'
const SliderOne = () => {
    return (
        <>
            <div >
                <div>
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div>
                                   <Image
                                            src={bannerimage}
                                            width={1600}
                                            height={600}
                                            alt='bg1-1'
                                            priority={true}
                                        />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                                  <Image
                                            src={bannerimage}
                                            width={1600}
                                            height={600}
                                            alt='bg1-1'
                                            priority={true}
                                        />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div >
                    
                                  <Image
                                            src={bannerimage}
                                            width={1600}
                                            height={600}
                                            alt='bg1-1'
                                            priority={true}
                                        />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderOne