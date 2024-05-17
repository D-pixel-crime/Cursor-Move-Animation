import MainIntro from "./MainIntro";
import ReviewSection from "./ReviewSection";

const Homepage = () => {
  return (
    <section className="w-full h-full flex flex-col px-36 pt-40">
      <MainIntro />
      <ReviewSection />
    </section>
  );
};
export default Homepage;
