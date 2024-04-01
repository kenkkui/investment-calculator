import React, { useState } from 'react';
import "./Author.css"

const buttonArray = ["more", "contacts"]

function Author() {
  const [activeIndex, setActiveIndex] = useState("");

  return (
    <section id="author-container">
        <div className="line">
          <span>Kenzo Bunyi</span> *
        </div>

        <div className="line">
          <span>developer</span> - <span>ui/ux designer</span>
        </div>

        <br />

        <div className="line">
          {buttonArray.map((item, index) => (
            <span
              key={index}
              className={activeIndex === index ? 'active' : ''}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex("")}
            >
              {item}
            </span>
          ))}
        </div>




    </section>
  );
}

export default Author;