import Header from '../components/markup/Header';
import Hero from '../components/markup/Hero';

const Home = () => {
  return (
    <div className='w-[90vw] h-[80vh] bg-hero-pattern bg-no-repeat bg-cover mx-auto flex items-center flex-col justify-between'>
      <Header />
      <Hero />
      <div />
    </div>
  );
};

export default Home;
