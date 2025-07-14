import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./View.css";

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

function View1() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(parseInt(id));
  const [isZoomed, setIsZoomed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      <div className="viewer-container">
        {/* Top Left */}
        <div className="viewer-icons top-left">
          <span title="Open Fullscreen" onClick={() => setIsZoomed(true)}>⛶</span>
        </div>

        {/* Top Right */}
        <div className="viewer-icons top-right">
          <span title="Close" onClick={() => navigate(-1)}>✕</span>
        </div>

        {/* Arrows */}
        <div className="viewer-arrow left" onClick={prevImage}>❮</div>

        <div className="viewer-image">
          <img src={images[currentIndex]} alt={`img-${currentIndex}`} />
        </div>

        <div className="viewer-arrow right" onClick={nextImage}>❯</div>
      </div>

      {/* Zoom Overlay */}
      {isZoomed && (
        <div className="zoom-overlay" onClick={() => setIsZoomed(false)}>
          <img src={images[currentIndex]} alt="Zoomed" className="zoomed-img" />
        </div>
      )}
    </>
  );
}

export default View1;
