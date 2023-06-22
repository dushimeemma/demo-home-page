interface Props {
  title?: string;
  dividerClasses?: string;
}
const TextHeader = ({ title, dividerClasses }: Props) => {
  return (
    <div className='max-w-[26.375rem]'>
      <span className='uppercase text-dark-blue text-[2.125rem] font-bold'>
        {title}
      </span>
      <div
        className={`border-dark-green w-[9.813rem] border-[0.313rem] ${dividerClasses}`}
      />
    </div>
  );
};

export default TextHeader;
