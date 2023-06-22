import CoverdVectors from '../reusable/CoverdVectors';
import TextCard from '../reusable/TextCard';

const AboutCard = () => {
  return (
    <div className='w-[76%] mx-auto rounded-[0.625rem] shadow-2xl min-h-[50vh] relative -mt-24'>
      <CoverdVectors classes='bg-white rounded-t-[0.625rem]' />
      <div className='bg-white pt-12'>
        <TextCard title='about lorem ipsum'>
          <>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis tempora maxime odit possimus accusantium harum quod
              alias, quam totam incidunt iusto delectus nesciunt commodi
              perferendis tempore, similique excepturi! Debitis, dolore?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              assumenda voluptates consequuntur quas velit officia eaque quasi.
              Aut incidunt, enim repellat itaque, non dignissimos doloremque
              ducimus illum eaque, obcaecati harum.
            </p>
          </>
        </TextCard>
      </div>
    </div>
  );
};

export default AboutCard;
