
import{ useRef } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://static.wixstatic.com/media/9e0242_99a9f3e63510437e8047eb6c937c453e~mv2.png/v1/fit/w_260,h_346,q_90,enc_avif,quality_auto/9e0242_99a9f3e63510437e8047eb6c937c453e~mv2.png",
  "https://static.wixstatic.com/media/9e0242_da8242853480489bb824183869180499~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_da8242853480489bb824183869180499~mv2.png",
  "https://static.wixstatic.com/media/9e0242_8c9b9cde714c4a878f297a2c8f2b6035~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_8c9b9cde714c4a878f297a2c8f2b6035~mv2.png",
  "https://static.wixstatic.com/media/9e0242_77bed211dbdf443eae7ff930976b8712~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_77bed211dbdf443eae7ff930976b8712~mv2.png",
  "https://static.wixstatic.com/media/9e0242_8b1700c26c6b40ed936a72fa09fa42d3~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_8b1700c26c6b40ed936a72fa09fa42d3~mv2.png",
  "https://static.wixstatic.com/media/9e0242_2cc7cdb4d047421caacbf71d97d60214~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_2cc7cdb4d047421caacbf71d97d60214~mv2.png",
 "https://static.wixstatic.com/media/9e0242_a601cfdfa05e4a2891d60659b9abb9e8~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_a601cfdfa05e4a2891d60659b9abb9e8~mv2.png",
 "https://static.wixstatic.com/media/9e0242_81a1a8a33b1e4b30a731d5201279e3c3~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_81a1a8a33b1e4b30a731d5201279e3c3~mv2.png",
 "https://static.wixstatic.com/media/9e0242_4fad2a7669a3420fbaab832b406e5d00~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_4fad2a7669a3420fbaab832b406e5d00~mv2.png",
 "https://static.wixstatic.com/media/9e0242_b943dbf8e8a24d108d6ae070b1adf604~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_b943dbf8e8a24d108d6ae070b1adf604~mv2.png",
 "https://static.wixstatic.com/media/9e0242_51c1832a0f4645b2ad58577f2ddd06fd~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_51c1832a0f4645b2ad58577f2ddd06fd~mv2.png"

 ]; 

const Shipped = () => {
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
                <span onClick={()=> navigate(`/view1/${index}`)}>View Details</span>
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
  )
}

export default Shipped
