import Button from '../reusable/Button';

const Hero = () => {
  return (
    <div className='text-white flex flex-col items-center mt-24 max-w-[34.938rem] text-center'>
      <span className='uppercase font-bold text-[2.125rem]'>
        Lorem ipsum, dolor sit amet consectetur adipisicing.
      </span>
      <Button
        label='Lorem ipsum'
        classes='my-6'
      />
    </div>
  );
};

export default Hero;
