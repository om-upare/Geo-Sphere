import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import image from "./../../../public/Images/world.png";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
  return (
    <main className="hero-section">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Discover the Globe, One Destination at a Time.
          </h1>
          <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <NavLink to="country">
            <button>
              Start Exploring <MdKeyboardDoubleArrowRight />
            </button>
          </NavLink>
        </div>
        <div className="hero-image">
          <img src={image} alt="GLOBE" className="banner-image" />
        </div>
      </div>
    </main>
  );
};
