import styled from 'styled-components';
import AboutImg from '../assets/images/about.png';
import PrimaryButton from './buttons/PrimaryButton';
import ParagraphText from './paragraphText/ParagraphText';
import SectionTitle from './titles/SectionTitle';

const AboutStyles = styled.div`
  padding: 10rem 0;
  .about__wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .about__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--mediumSlateBlue);
  }
  .about__title {
    margin-bottom: 2rem;
    max-width: 300px;
  }
  @media only screen and (max-width: 768px) {
    .about__wrapper {
      flex-direction: column;
    }
    .about__img {
      max-width: 400px;
    }
    .about__desc {
      margin-bottom: 2rem;
      max-width: 300px;
    }
  }
`;

function AboutSection() {
  return (
    <AboutStyles id="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__img">
            <img src={AboutImg} alt="Artistic" />
          </div>
          <div className="about__info">
            <ParagraphText className="about__subtitle">
              Who are we
            </ParagraphText>
            <SectionTitle className="about__title">
              Capturing life as it happens
            </SectionTitle>
            <ParagraphText className="about__desc">
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              sunt distinctio? Sunt assumenda nobis culpa quas explicabo,
              eligendi vero facere!'
            </ParagraphText>
            <PrimaryButton>Get In Touch</PrimaryButton>
          </div>
        </div>
      </div>
    </AboutStyles>
  );
}

export default AboutSection;
