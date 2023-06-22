import AboutParagraphBox from '../reusable/AboutParagraphBox';
import CoverdVectors from '../reusable/CoverdVectors';

const AboutBoxes = () => {
  return (
    <div className='w-[90vw] h-[80vh] bg-dark-grey relative mx-auto rounded-2xl my-24 flex flex-col justify-between'>
      <CoverdVectors classes='bg-dark-grey rounded-t-2xl' />
      <div className='w-[76%] px-12 mx-auto flex items-center justify-between'>
        <div className='text-white  min-h-[20vh] flex items-start justify-between'>
          <AboutParagraphBox />
          <AboutParagraphBox btnClasses='border-2 border-white bg-transparent text-white' />
        </div>
      </div>
      <CoverdVectors classes='bg-dark-grey rounded-b-2xl' />
    </div>
  );
};

export default AboutBoxes;
