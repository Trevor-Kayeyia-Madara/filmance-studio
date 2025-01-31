import { useState, useEffect } from "react";
import "../styles/slideshow.css";

const images = [
  "/images/slide1.jpg",
  "/images/slide2.JPG",
  "/images/slide3.jpg",
];

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Slide ${i + 1}`}
          className={`slide ${i === index ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default Slideshow;
