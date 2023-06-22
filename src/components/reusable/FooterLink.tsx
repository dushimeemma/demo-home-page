interface Props {
  href?: string;
  label?: string;
  isSocial?: boolean;
  LinkIcon?: any;
}

const FooterLink = ({ href, label, isSocial = false, LinkIcon }: Props) => {
  return (
    <li className='flex items-center'>
      {isSocial && <LinkIcon />}
      <a
        href={href}
        className={`${isSocial ? 'ml-2' : ''}`}
      >
        <span className='text-dark-blue'>{label}</span>
      </a>
    </li>
  );
};

export default FooterLink;
