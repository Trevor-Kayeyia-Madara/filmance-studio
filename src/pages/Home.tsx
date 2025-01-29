import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.JPG",
  "/images/slide3.jpg",
]; // Update paths based on your assets

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image Animation with adjusted padding-top */}
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${images[index]})`,
          paddingTop: "30%", // Adjust the padding-top here
        }}
      ></motion.div>

      {/* Overlay for Darker Effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Transparent Navigation Bar */}
      <Navbar />
      {/* <nav className="absolute top-0 w-full flex justify-between items-center px-8 py-4 bg-transparent text-white">
        <h1 className="text-3xl font-bold">Filmance Studio</h1>
        <ul className="flex gap-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Portfolio</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav> */}

      {/* Welcoming Message */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <motion.h1
          className="text-5xl font-extrabold drop-shadow-md"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Capture Every Beautiful Moment
        </motion.h1>
        <motion.p
          className="text-lg mt-3 max-w-xl"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          Let us create stunning photography that tells your story.
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          View Portfolio
        </motion.button>
      </div>
    </div>
  );
};

export default Home;
