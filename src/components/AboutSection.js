import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span>true
            </h2>
          </div>
          <div className="hide">
            <h2>True.</h2>
          </div>
          <p>Contact us for any photography ideas that you have.</p>
          <button>Contact US</button>
        </div>
        <img src={home1} alt="guy with a camera" />
      </div>
    </div>
  );
};

export default AboutSection;
