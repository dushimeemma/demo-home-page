import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as Search } from '../../assets/images/search.svg';
import { ReactComponent as Person } from '../../assets/images/person.svg';
import { ReactComponent as Cart } from '../../assets/images/cart.svg';
import NavItem from '../reusable/NavItem';

const Header = () => {
  return (
    <div className='flex items-center justify-between w-[76%] text-white my-12'>
      <button>
        <Logo />
      </button>
      <nav>
        <ul className='flex items-center justify-around uppercase'>
          <NavItem
            label='Home'
            href='#'
          />
          <NavItem
            label='GALLERY'
            href='#'
          />
          <NavItem
            label='ABOUT US'
            href='#'
          />
          <NavItem
            label='CONTACT'
            href='#'
          />
          <NavItem
            label='BLOG'
            href='#'
          />

          <NavItem
            label={<Search />}
            href='#'
          />
          <NavItem
            label={<Person />}
            href='#'
          />
          <NavItem
            label={<Cart />}
            href='#'
          />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
