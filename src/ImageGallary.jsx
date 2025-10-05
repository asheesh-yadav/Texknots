import React, { useRef } from 'react';
import  {  useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";


const images = [
  {
    large: 'https://static.wixstatic.com/media/9e0242_05518104d7cc4c8eb728b694a08b0297~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_05518104d7cc4c8eb728b694a08b0297~mv2.jpg',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_c37a0a5286a247e98c405b660fbe7b1b~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_c37a0a5286a247e98c405b660fbe7b1b~mv2.jpg',
      'https://static.wixstatic.com/media/9e0242_5b074b4a4c1d43a4b9524899b438a789~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_5b074b4a4c1d43a4b9524899b438a789~mv2.jpg',
    ]
  },
  {
    large: 'https://static.wixstatic.com/media/9e0242_bceec95255f24d2fbf8bf245753b2248~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_bceec95255f24d2fbf8bf245753b2248~mv2.jpg',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_501d8a6df2c54407aead8f5cc70127ba~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_501d8a6df2c54407aead8f5cc70127ba~mv2.jpg',

      'https://static.wixstatic.com/media/9e0242_5c80166004ad4cbc998e6d3dff8b0858~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_5c80166004ad4cbc998e6d3dff8b0858~mv2.jpg'
    ]
  },
  {
    large: 'https://static.wixstatic.com/media/9e0242_93a5a61d8b3242768f7bf576c6d400ac~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_93a5a61d8b3242768f7bf576c6d400ac~mv2.jpg',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_255b4547375547e7881e249940cf6eac~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_255b4547375547e7881e249940cf6eac~mv2.png',
      'https://static.wixstatic.com/media/9e0242_4a9da30574554ca0b4582ea7ffc4190f~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_4a9da30574554ca0b4582ea7ffc4190f~mv2.png'
    ]
  },
  {
    large: 'https://static.wixstatic.com/media/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png',
      'https://static.wixstatic.com/media/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg'
    ],
    
  },
    {
    large: 'https://static.wixstatic.com/media/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png',
      'https://static.wixstatic.com/media/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg'
    ]
  },
    {
    large: 'https://static.wixstatic.com/media/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_14df3dc7bf2a4980b89c0772cd3b4b91~mv2.png',
    smalls: [
      'https://static.wixstatic.com/media/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_b45b9e7d6d354b90b4d2f85019468358~mv2.png',
      'https://static.wixstatic.com/media/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg/v1/fit/w_1260,h_350,q_90,enc_avif,quality_auto/9e0242_9ac7adf36e294aea8dbc86718724ccd4~mv2.jpg'
    ]
  }

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
    style={{ maxHeight: "390px", width: "100%", objectFit: "cover" }}
    src={group.large}
    alt={`Large ${index + 1}`}
  />
  <div className="overlay">
    <span
      className="d-inline-flex align-items-center"
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
    return (
      <div className="small-img" key={key}>
        <img
          style={{ maxWidth: "200px", maxHeight: "190px", objectFit: "cover" }}
          src={img}
          alt={`Small ${index + 1}-${i + 1}`}
        />
        <div className="overlay">
          <span
            className="d-inline-flex align-items-center"
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