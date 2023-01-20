import Card from '../components/Card';
import StackIcons from '../components/StackIcons';

import { AboutProps } from '../types/TAbout';

const About = ({ content }: AboutProps) => {
  const { techStack, certificates, other } = content;

  return (
    <section id='about'>
      <div className='container'>
        <div className='about'>
          <Card icon={techStack.icon} title={techStack.title} className='about__card'>
            <div className='about__card__stack'>
              {techStack.stack.map((icon, index) => (
                <StackIcons icon={icon} key={index} />
              ))}
            </div>
          </Card>

          <Card icon={certificates.icon} title={certificates.title} className='about__card'>
            <ul className='about__card__list'>
              {certificates.links.map((cert, index) => (
                <li key={index}>
                  <a href={cert.url} target='_blank'>
                    {cert.name}
                  </a>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={other.icon} title={other.title} className='about__card'>
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
