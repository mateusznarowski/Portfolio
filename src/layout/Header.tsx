import ScrollTop from '../components/ScrollTop';
import ChangeColorMode from '../components/ChangeColorMode';
import Menu from '../components/Menu';

const Header = () => (
  <header id='header'>
    <div className='container'>
      <div className='header'>
        <Menu />

        <ChangeColorMode className='nav-color-mode' />
        <ScrollTop className='nav-scroll-top | btn btn--squared' />
      </div>
    </div>
  </header>
);

export default Header;
