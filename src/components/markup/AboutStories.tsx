import StoryCard from '../reusable/StoryCard';
import TextHeader from '../reusable/TextHeader';

interface Props {
  AddButton?: any;
}

const AboutStories = ({ AddButton }: Props) => {
  return (
    <div className='w-[76%] mx-auto px-12 mb-24'>
      <TextHeader title='LATEST STORIES AND UPDATES' />
      <div className='flex items-center justify-between'>
        <StoryCard
          AddButton={AddButton}
          bgImage='bg-update-one'
        />
        <StoryCard
          AddButton={AddButton}
          bgImage='bg-update-two'
        />
        <StoryCard
          AddButton={AddButton}
          bgImage='bg-update-three'
        />
      </div>
    </div>
  );
};

export default AboutStories;
