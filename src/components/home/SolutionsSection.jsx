import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useSelector } from 'react-redux';
import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaSearchDollar } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaLaptopCode className="text-4xl text-blue-500" />,
    description: 'Modern, responsive, and scalable websites built to perfection.',
  },
  {
    title: 'App Development',
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
    description: 'Beautiful mobile apps crafted for iOS and Android platforms.',
  },
  {
    title: 'Digital Marketing',
    icon: <FaBullhorn className="text-4xl text-pink-500" />,
    description: 'Strategies to boost your online presence and engagement.',
  },
  {
    title: 'SEO Optimization',
    icon: <FaSearchDollar className="text-4xl text-yellow-500" />,
    description: 'Rank higher on search engines and increase organic traffic.',
  },
];

const SolutionsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const controls = useAnimation();
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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      ref={sectionRef}
      className={`w-full py-20 transition-all duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-[#f9f6f2] text-gray-800'
      }`}
    >
      <div ref={ref} className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">
          Solutions <span className="text-red-500 dark:text-red-400">We Provide</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={cardVariants}
              className={`p-8 rounded-3xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                darkMode
                  ? 'bg-gray-800 text-white'
                  : 'bg-white text-gray-900'
              }`}
            >
              <div className="flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
