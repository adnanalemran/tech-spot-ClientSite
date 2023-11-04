import About from "./About";
import Bannar from "./Bannar";
import BrandSection from "./BrandSection";
import Faq from "./Faq";
import OffersSection from "./OffersSection";

const Home = () => {
  return (
    <div>
      <Bannar />
      <BrandSection />
      <OffersSection />
      <About />
      <Faq />
    </div>
  );
};

export default Home;
