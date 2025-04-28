import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { gsap } from 'gsap';
import { FaStar, FaStarHalfAlt, FaUsers, FaDownload } from 'react-icons/fa'; // 🔥 Added icons here!

const FeatureSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const sectionRef = useRef(null);
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      gsap.fromTo(
        sectionRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [inView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'linear' } },
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full py-16 overflow-hidden transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-[#f9f6f2] text-gray-800'
      }`}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-8">
        
        {/* Left Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className={`flex-1 p-6 rounded-3xl flex flex-col items-start transition-all duration-300 ${
            darkMode
              ? 'bg-gray-800 text-white'
              : 'bg-gradient-to-b from-[#ffcccc] to-[#ffe6e6] text-gray-800'
          }`}
        >
          <img src="/feature/thumb.png" alt="Like" className="w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2 text-red-600 dark:text-red-400">What We Do?</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Consectetur exercitat deserunt consectetur blanditiis, placeat.
          </p>
          <button className="text-red-600 dark:text-red-400 font-semibold hover:underline">
            Learn More →
          </button>
          <img src="/happy-girl.png" alt="Girl" className="mt-auto w-full object-cover rounded-2xl" />
        </motion.div>

        {/* Middle Cards */}
        <div className="flex flex-col gap-8 flex-1">

          {/* Trusted Users Card */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className={`p-6 rounded-3xl flex flex-col justify-center items-start transition-all duration-300 ${
              darkMode ? 'bg-red-400 text-white' : 'bg-[#B32025] text-white'
            }`}
          >
            <div className="flex items-center mb-4 relative">
              <div className="flex">
                <img src="/feature/feature1.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover z-30" style={{ marginLeft: 0 }} alt="user1" />
                <img src="/feature/feature2.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover z-20" style={{ marginLeft: '-10px' }} alt="user2" />
                <img src="/feature/feature3.jpg" className="w-10 h-10 rounded-full border-2 border-white object-cover z-10" style={{ marginLeft: '-10px' }} alt="user3" />
              </div>
              <span className="ml-4 text-2xl font-bold flex items-center">
                <FaUsers className="mr-2" /> + 
              </span>
            </div>
            <h2 className="text-3xl font-extrabold mb-2">25K+</h2>
            <p>Trusted Active Users</p>
          </motion.div>

          {/* Star Rating Card */}
          <motion.div
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className={`p-6 rounded-3xl flex flex-col justify-center items-start transition-all duration-300 ${
              darkMode ? 'bg-green-400 text-gray-900' : 'bg-[#0F3D3E] text-white'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 text-xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
              <span className="text-sm ml-2 text-gray-200">(4.5 rating)</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-2">8M+</h2>
            <p>Happy Customers</p>
          </motion.div>

        </div>

        {/* Download App Card */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={cardVariants}
          className={`flex-1 p-6 rounded-3xl flex flex-col justify-between shadow-lg transition-all duration-300 ${
            darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
          }`}
        >
          <div className="flex items-center justify-center mb-6 relative">
            <img src="/video-thumbnail.png" alt="video" className="w-20 h-20 rounded-full" />
            <div className="absolute bottom-0 right-0 bg-red-500 text-white rounded-full p-2">
              <FaDownload size={16} />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">
            Download Our App & Enroll now in our online media courses.
          </h3>
          <div className="flex space-x-4 mt-4">
            <img src="/feature/googlestore.png" alt="Google Play" className="h-12" />
            <img src="/feature/applestore.png" alt="App Store" className="h-12" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureSection;
