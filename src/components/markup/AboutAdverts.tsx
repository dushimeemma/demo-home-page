import AdvertCard from '../reusable/AdvertCard';
import TextHeader from '../reusable/TextHeader';

const AboutAdverts = () => {
  return (
    <div className='w-[76%] mx-auto'>
      <div className='mx-12'>
        <TextHeader title='Tellus erat aliquam blandit etiam' />
      </div>
      <div className='w-full flex items-center justify-around mx-auto py-6'>
        <AdvertCard classes='bg-advert-one bg-no-repeat bg-cover' />
        <AdvertCard classes='bg-advert-three bg-no-repeat bg-cover' />
        <AdvertCard classes='bg-advert-two bg-no-repeat bg-cover' />
      </div>
    </div>
  );
};

export default AboutAdverts;
