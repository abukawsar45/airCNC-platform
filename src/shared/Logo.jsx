import { Link } from 'react-router-dom';
import logoImg from '../assets/images/logo.png';

const Logo = () => {
  return (
    <Link to='/'>
      <img
        src={logoImg}
        alt='logo'
        width='100'
        height='100'
        className='hidden md:block'
      />
    </Link>
  );
}

export default Logo