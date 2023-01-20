import Prop from '../components/Prop';

import { HeroProps } from '../types/THero';

const Hero = ({ content, cv }: HeroProps) => {
  return (
    <section id='hero'>
      <div className='container'>
        <section className='hero'>
          <h1 className='hero__intro'>{content.intro}</h1>
          <h4 className='hero__bio'>{content.bio}</h4>
          {content.bioText.map((text, index) => (
            <p className='hero__bio-text' key={index}>
              {text}
            </p>
          ))}
          <div className='hero__cv'>
            <span className='hero__cv__text'>View my CV in:</span>
            <a href={cv.polish} target='_blank' title='CV in Polish' className='hero__cv__btn | btn btn--cta'>
              Polish
            </a>
            <a href={cv.english} target='_blank' title='CV in English' className='hero__cv__btn | btn btn--cta'>
              English
            </a>
          </div>

          <Prop className='hero__prop' />
        </section>
      </div>
    </section>
  );
};

export default Hero;
