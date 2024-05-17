import { Icon } from "@iconify/react/dist/iconify.js";

const ReviewSection = () => {
  return (
    <div className="flex flex-col mt-28 gap-32">
      <div className="flex flex-col gap-16">
        <div className="text-center text-xl">
          Trusted by thousands of users around the world
        </div>
        <div className="flex flex-row justify-around items-center">
          <div className="flex items-center gap-2">
            <img
              src="/motion art/navbar-leaf.png"
              alt="navbar leaf"
              className="block"
            />
            <div className="flex flex-col gap-2">
              <img src="/motion art/star.png" alt="star" />
              <div className="text-gray-300">4.5 Score,9 Reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img src="/motion art/g2.png" alt="navbar leaf" className="block" />
            <div className="flex flex-col gap-2">
              <img src="/motion art/star.png" alt="star" />
              <div className="text-gray-300">4.5 Score,9 Reviews</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/motion art/wordpress.png"
              alt="navbar leaf"
              className="block"
            />
            <div className="flex flex-col gap-2">
              <img src="/motion art/star.png" alt="star" />
              <div className="text-gray-300">4.5 Score,9 Reviews</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[2fr,1fr] gap-72">
        <div className="flex flex-col col-start-1 gap-6">
          <div className="text-4xl">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </div>
          <div className="text-base text-gray-400 tracking-wider">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </div>
          <div>
            <button className="flex items-center bg-gradient-to-r from-purple-600 from-40% to-orange-500 p-4 text-lg rounded-xl gap-2">
              Purchase From Envato
              <Icon icon="ph:arrow-right" className="text-white size-6" />
            </button>
          </div>
        </div>
        <div className="col-start-2">
          <img src="/motion art/wand.png" alt="wand" />
        </div>
      </div>
    </div>
  );
};
export default ReviewSection;
