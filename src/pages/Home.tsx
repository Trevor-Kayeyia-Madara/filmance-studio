// src/Home.tsx
import { useState, useEffect } from "react";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.JPG",
  "/images/slide3.jpg",
]; // Update paths based on your assets

const Home: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image with adjusted height */}
      <div
        className={`absolute top-0 left-0 w-full h-1/3 bg-cover bg-center transition-opacity duration-1000 ease-in-out`}
        style={{ 
          backgroundImage: `url(${images[index]})`,
          opacity: 1,
        }}
      ></div>

      {/* Overlay for Darker Effect */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Welcoming Message */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-md transition-transform duration-1000 ease-in-out transform translate-y-0">
          Capture Every Beautiful Moment
        </h1>
        <p className="text-lg mt-3 max-w-xl transition-transform duration-1000 ease-in-out transform translate-y-0">
          Let us create stunning photography that tells your story.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all">
          View Portfolio
        </button>
      </div>

      {/* Key Photography Categories */}
      <div className="absolute bottom-0 left-0 w-full bg-white text-black p-4">
        <h2 className="text-2xl font-bold text-center">Photography Categories</h2>
        <div className="flex justify-around mt-4">
          <div className="text-center">
            <h3 className="font-semibold">Weddings</h3>
            <p>Capturing your special day.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Portraits</h3>
            <p>Beautiful portraits for every occasion.</p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold">Events</h3>
            <p>Memories from your events.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;