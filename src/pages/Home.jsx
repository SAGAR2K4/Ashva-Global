import Hero from "../components/Hero";
import ProductRangeHero from "../components/ProductRangeHero";
import AboutHighlight from "../components/AboutHighlight";
import GlobalClientele from "../components/GlobalClientele"


export default function Home() {
  return (
    <>
      <Hero />
      <AboutHighlight/>
      <ProductRangeHero />
      <GlobalClientele/>
    </>
  );
}