import Hero from '../components/Hero';
import Toolkit from '../components/Toolkit';
import Quotes from '../components/Quotes';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Toolkit />
            <Quotes />
            <FAQ />
        </div>
    );
};

export default Home;
