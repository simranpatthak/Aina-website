import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const HeroSection = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const iconsRef = useRef([]);
  const darkMode = useSelector(state => state.theme.darkMode);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out' }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
    );

    iconsRef.current.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.2
      });
    });
  }, []);

  const iconImages = [
    '/icons/fb.png',
    '/icons/Messenger.png',
    '/icons/player.png',
    '/icons/Whatsapp.png',
    '/icons/tweet.png'
  ];

  const iconPositions = [
    { top: '-20px', left: '-20px' },
    { top: '-20px', right: '-20px' },
    { bottom: '-20px', right: '-10px' },
    { bottom: '-30px', left: '-10px' },
    { bottom: '50%', left: '-30px' }
  ];

  return (
    <section className={`min-h-screen pt-28 md:pt-32 px-6 md:px-16 py-10 overflow-hidden transition-all duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        
        <div ref={leftRef} className="md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Building <span className="text-red-600">Future-Ready</span><br /> Digital Solutions
          </h1>
          <p className="text-base md:text-lg max-w-lg mx-auto md:mx-0">
            At Aina Technologies, we innovate, automate, and navigate businesses into the digital era. 
            From software development to intelligent analytics, we craft solutions that empower your growth.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 hover:bg-red-700 transition">
              Get Started
            </button>
            <button className={`border ${darkMode ? 'border-white' : 'border-gray-700'} px-8 py-3 rounded-full font-semibold text-sm hover:scale-105 transition`}>
              Our Services
            </button>
          </div>
        </div>
        <div ref={rightRef} className="md:w-1/2 flex justify-center items-center relative">
          <div className="relative w-full flex justify-center">
            <div className={`absolute w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full ${darkMode ? 'bg-gray-800' : 'bg-green-200'} z-0`} />
            <img
              src="/landing.png"
              alt="Hero Illustration"
              className="relative max-w-[250px] md:max-w-[380px] w-full object-contain z-10 rounded-full border-4 border-white shadow-xl"
            />
            {iconImages.map((src, index) => (
              <img
                key={index}
                src={src}
                ref={(el) => (iconsRef.current[index] = el)}
                alt="icon"
                className="w-10 h-10 md:w-12 md:h-12 absolute z-20 rounded-full shadow-lg bg-white p-1"
                style={{
                  ...iconPositions[index],
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
