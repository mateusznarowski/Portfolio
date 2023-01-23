import SkipToContent from '../components/SkipToContent';
import Menu from '../components/Menu';
import ChangeColorMode from '../components/ChangeColorMode';
import ScrollToTop from '../components/ScrollToTop';

const Header = () => (
  <header id='header'>
    <div className='container'>
      <div className='header'>
        <SkipToContent />

        <Menu />

        <ChangeColorMode className='nav-color-mode' />
        <ScrollToTop className='nav-scroll-top | btn btn--squared' />
      </div>
    </div>
  </header>
);

export default Header;
