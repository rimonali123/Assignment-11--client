import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide >

                    <div className="hero h-[300px] lg:h-[500px]  rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/6HHNhm4/image-1.webp)' }}>
                        <div className="hero-overlay bg-opacity-30  rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">

                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Navigating Your Health Journey Insights from ConsultHub']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Navigating Your Health Journey: Insights from ConsultHub offers expert guidance for informed decisions on your wellness voyage.</p>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/G5ndGm8/images-2.webp)' }}>
                        <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Unlocking Medical Wisdom Your Guide to Consultations']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Unlocking Medical Wisdom: Your Guide to Consultations navigates your health journey with expert insights for informed decisions.</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/YXbYt2s/image-3.jpg)' }}
                    >

                        <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Your Health, Our Expertise: ConsultHub']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Your Health, Our Expertise: ConsultHub provides tailored consultations for optimal well-being. Connect with experts dedicated to your health journey.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/pX6DL3h/image-4.webp)' }}>
                        <div className="hero-overlay bg-opacity-40 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['Empowering Wellness Inside ConsultHub Doctors']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Empowering Wellness Inside ConsultHub Doctors offers expert guidance for your well-being journey.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/zG7FsDW/image-5.webp)' }}>
                        <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['ConsultHub: Your Wellness Hub']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>

                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Wellness Hub is your gateway to expert guidance for holistic well-being. Prioritize your health with personalized consultations.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[300px] lg:h-[500px] rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/ZdcBrrD/image-6.jpg)' }}>
                        <div className="hero-overlay bg-opacity-40 rounded-3xl" ></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>
                                    <Typewriter
                                        words={['ConsultHub: Your Health Connection']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    />
                                </h1>
                                <p className="lg:text-lg font-bold md:w-[600px] lg:w-[1000px] mx-auto text-center" >Your Health Connection links you with expert healthcare. Access personalized consultation services for informed decisions and prioritized well-being.</p>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;