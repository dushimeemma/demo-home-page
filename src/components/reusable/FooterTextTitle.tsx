interface Props {
  label?: string;
}

const FooterTextTitle = ({ label }: Props) => {
  return <span className='text-dark-blue font-semibold my-6'>{label}</span>;
};

export default FooterTextTitle;
