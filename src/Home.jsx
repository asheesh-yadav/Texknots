import React from 'react'
import Header from './Header'
import ImageSlider from './ImageSlider';
import ImageGallery from './ImageGallary';
import Shipped from './Shipped';
import Export from './Export';
import Contact from './Contact';

const Home = () => {
    const teamData = [
  {
    title: 'The Design Team',
      img: 'https://static.wixstatic.com/media/9e0242_00d41994bd5041668e29c1180fad12a2~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4428_edited.jpg',
    description: `Our expert fashion design team combines traditional craftsmanship with advanced design technology to deliver exceptional, trend-driven solutions. Specializing in textile trend forecasting, custom print design, and collection development, we create designs that inspire and perform. Our senior designers constantly research global trends, respond to client-specific needs, and produce ongoing inspirational collections. With in-house print designers generating fresh ideas daily, we’re equipped to turn your creative concepts into high-quality garment designs—fast, efficiently, and beautifully.`
  },
  {
    title: 'The Merchandising Team',
   img: 'https://static.wixstatic.com/media/9e0242_11ce4d7ff67145669f863be1ef013858~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4365_edited.jpg',
    description: `Our merchandising team is the link between creativity and delivery. With deep product knowledge, market insight, and a client-first approach, they ensure smooth communication, timely follow-ups, and efficient execution from design to production. Skilled in sourcing, pricing, and coordination, our merchandisers work closely with both clients and suppliers to meet evolving needs with speed and precision. Their dedication and proactive support turn great ideas into successful products—seamlessly and reliably.`
  },
  {
    title: 'The Global Team',
    img: 'https://static.wixstatic.com/media/9e0242_4c26d1baa4804057b0b4a655a7d56ca8~mv2.jpg/v1/crop/x_293,y_0,w_2413,h_2000/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/violeta%20minnick%20photography24_edited.jpg',
    description: `As part of the Texknots team based in Spain (Mallorca) and Brazil (São Paulo), Stefanie and Vivian are your personal connection to our global network. With a deep passion for fashion and extensive industry experience, they’re here to support you with design development, production coordination, and personalized service.
Always tuned into what’s next, they regularly present our latest collections—making it easy for you to discover fresh ideas and move quickly when new designs are needed. Whether you're looking for creative inspiration or hands-on support, Stefanie and Vivian are here to make your journey smoother, faster, and more`
  }
];
  return (
    <div>
      {/* -------Hero  */}
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image">
          <img
            src="https://static.wixstatic.com/media/9e0242_9c0b696b3ddd4ee9b06b44df3f6171a8~mv2.png/v1/fill/w_460,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7949_heic.png"
            alt="Texknots Dress"
            width="460"
            height="480"
          />
        </div>
        <div className="hero-text">
          <p>
            “Texknots is built on trust, passion, and craftsmanship. I believe in empowering my team to
            create with freedom and excellence—because when people thrive, great things happen.”
          </p>
          <p className="founder">—Khagesh Agarwal, Founder</p>
        </div>
      </div>
    </section>


    {/* --- */}
    <section className="craftsmanship-section">
      <div className="craftsmanship-container">
        <div className="craftsmanship-text">
          <p className='headingg'>Where Craftsmanship Meets Creativity</p>
          <p>
            At Texknots International, we don’t just manufacture garments—we master the art of craftsmanship.
            With over 24 years of expertise in textiles and fashion, we are a trusted name in high-quality apparel
            manufacturing and export. Strategically located in Noida, India’s garment manufacturing hub, and with a
            dedicated team in Europe and South America, we blend traditional expertise with modern innovation,
            ensuring seamless collaboration and exceptional results.
          </p>
          <p>
            Let’s craft something extraordinary together!
          </p>
        </div>
        <div className="craftsmanship-image">
          <img
            src="https://static.wixstatic.com/media/9e0242_3390a474b1844f748e0294817dbdaa29~mv2.png/v1/fill/w_639,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e0242_3390a474b1844f748e0294817dbdaa29~mv2.png"
            alt="Craftsmanship"
          />
        </div>
      </div>
    </section>
    {/* 3rd para */}
     <section className="design-limits-section">
      <div className="design-limits-container">
        <div>
        <div className="design-limits-image">
           <img
      src="https://static.wixstatic.com/media/9e0242_21dd5183c47b4e599508bf87cad32bd2~mv2.png/v1/fill/w_1120,h_1280,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_7884_heic.png"
      alt="Design Without Limits"
      className="design-background-image"
    />
        </div>
        <div className="design-limits-text">
          <h2>Design Without<br />Limits</h2>
          <p>
            Our team is trained to step into your shoes, fostering a collaborative approach to
            collection development. With designers based in Europe, we stay ahead of trend forecasts and can assist you with:
          </p>
          <ul>
            <li>Print inspirations</li>
            <li>Embroidery motifs</li>
            <li>Artisan techniques</li>
          </ul>
          <p>Let your imagination run wild—we’ll handle the rest.</p>
        </div>
              </div>
      </div>
    </section>

    {/* 4rth */}
       <section className="team-section">
      <h4 className="team-heading">Our team at work</h4>
        <div className="underline under1"></div>
      <p className="team-description">
        From our production experts in India to our talented design team and our creative,
        client-focused global team in Spain and Brazil—every member plays a vital role in
        turning ideas into exceptional garments. Together, we blend global expertise with
        local insight to deliver excellence at every step of the process.
      </p>
      <div className="team-cards">
        {teamData.map((team, index) => (
          <div className="team-card" key={index}>
            <img src={team.img} alt={team.title} />
            <div style={{padding:"50px"}}>
            <p className='para'>{team.title}</p>
            <p>{team.description}</p>
            </div>
        
          </div>
        ))}
      </div>
    </section>


    {/* ----------5th para */}
        <section className="showcase-section">
      <div className="showcase-container">
        <span className="showcase-title">A Showcase of Our Creative Work</span>
        <div className="underline"></div>
        <p className="showcase-description">
          Check out a small preview of our on going collections. If there is anything you like don’t hesitate to <br />
          book an appointment and see the complete collection.
        </p>
      </div>
    </section>
    <ImageSlider/>
    {/* Factory section */}

        <section className="factory-section">
      <p className="section-title">The Factory</p>
      <div className="divider"></div>
      <p className="section-description">
        This is where innovation and creativity meet craftsmanship—and we’re proud to share our workspace
        with you. Our factory is fully equipped to deliver excellence in all aspects of embroidery, surface
        ornamentation, embellishments, wash effects, and advanced printing techniques on apparel.
      </p>
    </section>

    {/* Innovation */}

        <section className="innovation-container">
      <div className="innovation-block">
        <div className="image-block">
          <img
            src="https://static.wixstatic.com/media/9e0242_afaaf89f398844ebac5722a4ea074947~mv2.jpg/v1/fill/w_948,h_1109,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e0242_afaaf89f398844ebac5722a4ea074947~mv2.jpg"
            alt="Embroidery Machine"
            className="block-image"
          />
        </div>
        <div className="text-block">
          <h5>Innovation & Craftsmanship</h5>
          <p>
            Driven by innovation, we are continually exploring new fabric developments and pushing
            boundaries in textile technology, all while maintaining a commitment to the
            craftsmanship that defines us. This dedication ensures we stay ahead of the curve,
            reinforcing best practices throughout the manufacturing process. <br /><br />
            Our newest addition is an extension of our existing unit, now featuring a multi-head
            embroidery unit with the latest laser attachments. This cutting-edge upgrade allows us
            to execute intricate cutwork embroideries with precision and efficiency, adding a modern
            touch to traditional craftsmanship.
          </p>
        </div>
      </div>

      <div className="innovation-block">
        <div className="image-block">
          <img
            src="https://static.wixstatic.com/media/9e0242_3448d1c550a44139aee0280b69ef1193~mv2.jpg/v1/fill/w_948,h_720,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e0242_3448d1c550a44139aee0280b69ef1193~mv2.jpg"
            alt="Worker Using Juki Machine"
            className="block-image"
          />
        </div>
        <div className="text-block">
          <h5>Transparency & Trust</h5>
          <p>
            At Texknots, we believe in complete transparency every step of the way. We’re always
            upfront about anything related to production, from timelines to challenges, ensuring you
            have all the information you need to make informed decisions. <br /><br />
            Our merchandising team handles every production with so much care, making sure we’re
            always on time, no matter what. When issues arise, we address them head-on with
            proactive problem-solving, always keeping one bottom line in mind: trust. It’s through
            this openness and reliability that we build long-lasting partnerships, grounded in
            mutual respect and confidence.
          </p>
        </div>
      </div>


        <div className="innovation-block">
        <div className="image-block">
          <img
            src="https://static.wixstatic.com/media/9e0242_9a6bb947eb6648b183f5cbb4b43e9e92~mv2.jpg/v1/fill/w_948,h_983,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/9e0242_9a6bb947eb6648b183f5cbb4b43e9e92~mv2.jpg"
            alt="Worker Using Juki Machine"
            className="block-image"
          />
        </div>
        <div className="text-block">
          <h5>Customer Centric Approach</h5>
          <p>
         At Texknots, we put our clients at the center of everything we do. Our ongoing showroom in India is always up to date with the latest collections, ensuring we stay aligned with our clients' ever-evolving needs. But we don’t stop there—our global team is a mobile showroom, ready to be wherever you need us. With dedicated representatives in Europe and South America, we’re always on hand to provide personalized support, showcase new designs, and respond to requests quickly and efficiently. Your needs drive us, and we’re here to make sure you have everything you need, whenever you need it.
          </p>
        </div>
      </div>
    </section>



    {/* fatory look */}
         <section className="factory-section">
      <p className="section-title">A Look inside Our Factory</p>
      <div className="divider"></div>
      <p className="section-description">
        Step into our world of craftsmanship and innovation. Here’s a glimpse into the daily rhythm of our production floor, where every stitch tells a story.
      </p>
    </section>
    <ImageGallery/>


    {/* shipped */}
          <section className="factory-section">
            <div style={{zIndex:"999999999999999999999999999999999999999"}}>
      <p className="section-title">Some of our latest shipped styles</p>
      <div className="divider"></div>
      <p className="section-description">
     Take a look at some of our latest shipped styles. These reflect the perfect balance of innovation and craftsmanship—made with care and delivered with precision..
      </p>
      </div>
    </section>
    <Shipped/>
    <Export/>
    <div className='Contact-div'>
    <Contact/>
    </div>

    {/* map */}
    <div className="maP">
     <div className='map-div'>
       <div style={{ position: "relative", width: "100%", textAlign: "center" }}>
      <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14011.089758241566!2d77.36400325821907!3d28.620843835155926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce53cda659a37%3A0x6b94d20502b233f5!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1688900000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{
          border: 0,
          filter: "grayscale(100%)",
          WebkitFilter: "grayscale(100%)",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </div>
</div>
    </div>
  )
}

export default Home
