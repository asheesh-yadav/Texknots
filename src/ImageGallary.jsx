import React, { useRef } from 'react';
import  {  useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import a1 from "./img/a1.jpg";
import a2 from "./img/a2.jpg";
import a3 from "./img/a3.jpg";
import a4 from "./img/a4.jpg";
import a5 from "./img/a5.jpg";
import a6 from "./img/a6.jpg";
import a7 from "./img/a7.jpg";
import a8 from "./img/a8.png";
import a9 from "./img/a9.png";
import a11 from "./img/a11.png";
import a12 from "./img/a12.png";
import a13 from "./img/a13.jpg";
import a14 from "./img/a14.jpg";
import a15 from "./img/a15.jpg";
import a16 from "./img/a16.jpg";
import a17 from "./img/a17.jpg";
import a18 from "./img/a18.jpg";
import a20 from "./img/a20.jpg";
import a21 from "./img/a21.jpg";
import a22 from "./img/a22.jpg";
import a23 from "./img/a23.jpg";
import a24 from "./img/a24.jpg";
import a25 from "./img/a25.jpg";
import a26 from "./img/a26.jpg";
import a27 from "./img/a27.jpg";
import a28 from "./img/a28.jpg";
import a29 from "./img/a29.jpg";
import a30 from "./img/a30.jpg";
import a33 from "./img/a33.jpg";
import a34 from "./img/a34.jpg";
import a35 from "./img/a35.png";

const images = [
  { large: a1, smalls: [a2, a3] },
  { large: a4, smalls: [a5, a6] },
  { large: a7, smalls: [a8, a9] },
  { large: a13, smalls: [a14, a15] },
  { large: a16, smalls: [a17, a18] },
  { large: a12, smalls: [a20, a21] },
  { large: a22, smalls: [a23, a24] },
  { large: a25, smalls: [a26, a27] },
  { large: a28, smalls: [a29, a30] },
  { large: a11, smalls: [a11, a33] },
  { large: a34, smalls: [a35, a1] }, 
];

const ImageGallery = () => {
  const scrollRef = useRef(null);
  const [liked, setLiked] = useState(false);
const [likedImages, setLikedImages] = useState({});

  const heartStyle = {
    cursor: "pointer",
    fontSize: "16px",
    color: liked ? "red" : "white",
    marginLeft: "8px",
    transition: "color 0.3s ease",
  };

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = container.offsetWidth;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="creative-wrapper">
      <button className="navv left" onClick={() => handleScroll("left")}>
        &#10094;
      </button>

      <div className="grid-scroll" ref={scrollRef}>
        {images.map((group, index) => (
          <div className="grid-group" key={index}>
        <div className="large-img">
  <img
    style={{ maxHeight: "500px", width: "100%", objectFit: "cover" }}
    src={group.large}
    alt={`Large ${index + 1}`}
  />
  <div className="overlay">
    <span
      className="d-inline-flex align-items-center" style={{position: "absolute",
    top: "85%",
    left: "15%"}}
      onClick={(e) => {
        e.stopPropagation();
        const key = `large-${index}`;
        setLikedImages((prev) => ({
          ...prev,
          [key]: !prev[key],
        }));
      }}
    >
      <i
        className={`bi ${likedImages[`large-${index}`] ? "bi-heart-fill" : "bi-heart"}`}
        style={{
          cursor: "pointer",
          fontSize: "16px",
          color: likedImages[`large-${index}`] ? "red" : "white",
          marginLeft: "8px",
          transition: "color 0.3s ease",
        }}
      ></i>
    </span>
  </div>
</div>


   <div className="small-imgs">
  {group.smalls.map((img, i) => {
    const key = `${index}-${i}`;
    // Conditional width
    const maxWidth = index === 0 ? "252px" : "600px"; 

    return (
      <div className="small-img" key={key}>
        <img
          style={{
            maxWidth: maxWidth,
            maxHeight: "245px",
            objectFit: "cover",
          }}
          src={img}
          alt={`Small ${index + 1}-${i + 1}`}
        />
        <div className="overlay">
          <span
            className="d-inline-flex align-items-center" style={{position: "absolute",
    top: "85%",
    left: "15%"}}
            onClick={(e) => {
              e.stopPropagation();
              setLikedImages((prev) => ({
                ...prev,
                [key]: !prev[key],
              }));
            }}
          >
            <i
              className={`bi ${likedImages[key] ? "bi-heart-fill" : "bi-heart"}`}
              style={{
                cursor: "pointer",
                fontSize: "16px",
                color: likedImages[key] ? "red" : "white",
                marginLeft: "8px",
                transition: "color 0.3s ease",
              }}
            ></i>
          </span>
        </div>
      </div>
    );
  })}
</div>



          </div>
        ))}
      </div>

      <button className="navv right" onClick={() => handleScroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default ImageGallery;