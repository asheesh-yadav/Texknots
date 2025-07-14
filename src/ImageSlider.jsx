import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";


const images = [
  "https://static.wixstatic.com/media/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png/v1/fit/w_1260,h_223,q_90,enc_avif,quality_auto/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png",
  "https://static.wixstatic.com/media/9e0242_00d41994bd5041668e29c1180fad12a2~mv2.jpg",
  "https://static.wixstatic.com/media/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png/v1/fit/w_1260,h_223,q_90,enc_avif,quality_auto/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png",
  "https://static.wixstatic.com/media/9e0242_11ce4d7ff67145669f863be1ef013858~mv2.jpg",
  "https://static.wixstatic.com/media/9e0242_4c26d1baa4804057b0b4a655a7d56ca8~mv2.jpg",
  "https://static.wixstatic.com/media/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png/v1/fit/w_1260,h_223,q_90,enc_avif,quality_auto/9e0242_8a7cc290eec8447b9513daa32e27d553~mv2.png",
 "https://static.wixstatic.com/media/9e0242_4c26d1baa4804057b0b4a655a7d56ca8~mv2.jpg",
 ]; 


const ImageSlider = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();

  const scroll = (scrollOffset) => {
    sliderRef.current.scrollBy({
      left: scrollOffset,
      behavior: "smooth"
    });
  };

  return (
    <section className="slider-section">
      <div className="slider-wrapper">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={() => scroll(-300)}>
          <span className="arrow-icon">❮</span>
        </button>

        {/* Slider Images */}
        <div className="slider-container" ref={sliderRef}>
          {images.map((img, index) => (
            <div className="slider-item" key={index}>
              <img src={img} alt={`Slide ${index}`} />
              <div className="overlay">
                <span onClick={()=> navigate(`/view/${index}`)}>View Details</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={() => scroll(300)}>
          <span className="arrow-icon">❯</span>
        </button>
      </div>
    </section>
  );
};

export default ImageSlider;
