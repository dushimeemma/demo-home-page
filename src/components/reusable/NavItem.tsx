import { ReactNode } from 'react';

interface Props {
  label?: string | ReactNode;
  href?: string;
}

const NavItem = ({ label, href }: Props) => {
  return (
    <li className='mx-6'>
      <a href={href}>{label}</a>
    </li>
  );
};

export default NavItem;
