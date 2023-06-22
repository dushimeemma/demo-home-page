import TextCard from '../reusable/TextCard';

const AboutParagraphs = () => {
  return (
    <div className='w-[76%] flex items-center justify-around mx-auto px-12 py-2'>
      <TextCard title='MISSION'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          tempora maxime odit possimus accusantium harum quod alias, quam totam
          incidunt iusto delectus nesciunt commodi perferendis tempore,
          similique excepturi! Debitis, dolore?
        </p>
      </TextCard>
      <div className='w-[2.5rem]' />
      <TextCard title='VISION'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          tempora maxime odit possimus accusantium harum quod alias, quam totam
          incidunt iusto delectus nesciunt commodi perferendis tempore,
          similique excepturi! Debitis, dolore?
        </p>
      </TextCard>
      <div className='w-[2.5rem]' />
      <TextCard title='OBJECTIVES'>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          tempora maxime odit possimus accusantium harum quod alias, quam totam
          incidunt iusto delectus nesciunt commodi perferendis tempore,
          similique excepturi! Debitis, dolore?
        </p>
      </TextCard>
    </div>
  );
};

export default AboutParagraphs;
