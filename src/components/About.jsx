import SkeletonLoader from './SkeletonLoader';

const About = ({ contactData }) => {
  return (
    <section id='about' className='section about'>
      <div className='about__photo'>
        <SkeletonLoader src='/profile_picture.png' alt='Profile picture' width={'300px'} aspectRatio={'1653 / 2125'} />
        <span />
      </div>
      <div className='about__text'>
        <h1 className='about__title'>Hi,</h1>
        <h3 className='about__bio'>My name is Mateusz and I am a 20-year-old programmer.</h3>
        <p className='about__bio-text'>
          I started my adventure with web development 2 years ago, in technical school on the profile of IT technician.
          I graduated from education with the title of IT technician.
        </p>
        <p className='about__bio-text'>
          Over time, I realized that creating websites gives me fun, so while still in school I taught myself at home,
          developed the assigned projects and also created my own.
        </p>
        <div className='about__cv-download'>
          <a href={contactData.cv_pl} target='_blank' title='CV Mateusz Narowski - PL' className='btn btn--icon'>
            Download CV - PL <i className='fa-solid fa-file-arrow-down' />
          </a>
          <a href={contactData.cv_en} target='_blank' title='CV Mateusz Narowski - EN' className='btn btn--icon'>
            Download CV - EN <i className='fa-solid fa-file-arrow-down' />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
