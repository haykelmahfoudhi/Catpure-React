import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { motion, AnimateSharedLayout } from "framer-motion";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle className="question" title="How Do I start?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              dolorum, alias est,?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorum perspiciatis dolorem tenetur ullam qui officia,
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="Diffrent payment?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              dolorum, alias est,?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorum perspiciatis dolorem tenetur ullam qui officia,
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="Daily Schedule?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              dolorum, alias est,?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorum perspiciatis dolorem tenetur ullam qui officia,
            </p>
          </div>
        </Toggle>
        <Toggle className="question" title="What Products do you offer?">
          <div className="answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
              dolorum, alias est,?
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              dolorum perspiciatis dolorem tenetur ullam qui officia,
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-Line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;
export default FaqSection;
