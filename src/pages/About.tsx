import AboutAdverts from '../components/markup/AboutAdverts';
import AboutBoxes from '../components/markup/AboutBoxes';
import AboutCard from '../components/markup/AboutCard';
import AboutParagraphs from '../components/markup/AboutParagraphs';
import { ReactComponent as AddButton } from '../assets/images/add-btn.svg';
import AboutStories from '../components/markup/AboutStories';
import Footer from '../components/markup/Footer';

const About = () => {
  return (
    <div className='w-[90vw] min-h-[130vh] bg-white absolute left-[5vw]'>
      <AboutCard />
      <AboutParagraphs />
      <AboutAdverts />
      <AboutBoxes />
      <AboutStories AddButton={AddButton} />
      <Footer />
    </div>
  );
};

export default About;
