import home1 from "../img/home1.png";
//Styled
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> become
            </h2>
          </Hide>
          <Hide>
            <h2>True.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography ideas that you have.Contact us for any
          photography ideas that you have.
        </p>
        <button>Contact US</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//Styled Component

export default AboutSection;
