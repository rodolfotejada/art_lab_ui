import { RiImageEditLine } from 'react-icons/ri';
import styled from 'styled-components';
import SectionTitle from '../titles/SectionTitle';
import ServiceItem from './ServiceItem';

const ServicesSectionStyles = styled.div`
  padding: 10rem 0;
  text-align: center;
  .services__title {
    margin-bottom: 3rem;
  }
  .services__items {
    display: flex;
    gap: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .services__items {
      flex-direction: column;
      max-width: 300px;
      margin: 0 auto;
    }
  }
`;

function ServicesSection() {
  return (
    <ServicesSectionStyles id="services">
      <div className="container">
        <SectionTitle className="services__title">Our services</SectionTitle>
        <div className="services__items">
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dicta voluptas laudantium at consequuntur. Delectus impedit quidem voluptatum perspiciatis vitae."
          />
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dicta voluptas laudantium at consequuntur. Delectus impedit quidem voluptatum perspiciatis vitae."
          />
          <ServiceItem
            icon={<RiImageEditLine />}
            title="Professional Editing"
            desc="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis dicta voluptas laudantium at consequuntur. Delectus impedit quidem voluptatum perspiciatis vitae."
          />
        </div>
      </div>
    </ServicesSectionStyles>
  );
}

export default ServicesSection;
