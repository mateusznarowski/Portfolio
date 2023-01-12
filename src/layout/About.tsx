import StackIcons from '../components/StackIcons';

type AboutProps = {
  content: {
    techStack: {
      icon: string;
      title: string;
      stack: string[];
    };
    certificates: {
      icon: string;
      title: string;
      links: { name: string; url: string }[];
    };
    other: {
      icon: string;
      title: string;
      text: string[];
      stack: string[];
    };
  };
};

const About = ({ content }: AboutProps) => {
  const { techStack, certificates, other } = content;

  return (
    <section id='about'>
      <div className='container'>
        <div className='about'>
          <article className='about__card | card'>
            <header>
              <span className='about__card__icon'>
                <i className={techStack.icon} />
              </span>
              <h3 className='about__card__title'>{techStack.title}</h3>
            </header>

            <div className='about__card__stack'>
              {techStack.stack.map((icon, index) => (
                <StackIcons icon={icon} key={index} />
              ))}
            </div>
          </article>

          <article className='about__card | card'>
            <header>
              <span className='about__card__icon'>
                <i className={certificates.icon} />
              </span>
              <h3 className='about__card__title'>{certificates.title}</h3>{' '}
            </header>

            <ul className='about__card__list'>
              {certificates.links.map((cert, index) => (
                <li key={index}>
                  <a href={cert.url} target='_blank'>
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article className='about__card | card'>
            <header>
              <span className='about__card__icon'>
                <i className={other.icon} />
              </span>
              <h3 className='about__card__title'>{other.title}</h3>
            </header>

            {other.text.map((text, index) => (
              <p className='about__card__text' key={index}>
                {text}
              </p>
            ))}
            <div className='about__card__stack'>
              {other.stack.map((icon, index) => (
                <StackIcons icon={icon} key={index} />
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
