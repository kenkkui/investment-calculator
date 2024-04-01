import React from 'react';
import "./Author.css"
import Line from './Line';

const anchorTags = [
  {
    id: 1,
    href: 'https://github.com/kenkkui',
    app: "Github"
  },
  {
    id: 2,
    href: 'https://www.instagram.com/k3.nn1/',
    app: "Insta"
  }
]

function Author() {
  return (
    <section id="author-container">
        <Line 
          firstWord="It's"
          secondWord="Kenzo Bunyi"
        />
        <Line 
          firstWord="developer"
          secondWord="designer"
          thirdWord="-"
        />
        <br />

        <Line>
          {anchorTags.map(item => {
            return (
              <a href={item.href} key={item.id} className='word special'>
                {item.app}
              </a>
            )
          })}
        </Line>
    </section>
  );
}

export default Author;