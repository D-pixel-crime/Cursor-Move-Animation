import MainIntro from "./MainIntro";
import ReviewSection from "./ReviewSection";
import Tabs from "./Tabs";

const Homepage = () => {
  return (
    <section className="w-full h-full flex flex-col px-36 pt-40 gap-32">
      <MainIntro />
      <ReviewSection />
      <Tabs />
    </section>
  );
};
export default Homepage;
