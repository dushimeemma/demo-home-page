import Button from './Button';

interface Props {
  btnClasses?: string;
}

const AboutParagraph = ({ btnClasses }: Props) => {
  return (
    <div className='text-white  min-h-[20vh] flex items-start flex-col justify-between'>
      <span className='uppercase text-[2.125rem] font-bold'>
        Lorem ipsum dolor sit consectetur.
      </span>
      <p className='my-6'>
        Mauris suscipit faucibus felis risus lectus platea neque ut. Odio
        adipiscing tincidunt velit egestas convallis placerat vestibulum.
      </p>
      <Button
        label='lorem ipsum'
        classes={btnClasses}
      />
    </div>
  );
};

export default AboutParagraph;
