import styled from 'styled-components';
import ParagraphText from '../paragraphText/ParagraphText';
import SectionTitle from '../titles/SectionTitle';
import TeamMemberItem from './TeamMemberItem';
import teamMember1 from '../../assets/images/tyrell-james-8lLXHh3m5_o-unsplash.jpeg';
import teamMember2 from '../../assets/images/markus-stephen-griffiths-MtSF6U6gy2Q-unsplash.jpeg';
import teamMember3 from '../../assets/images/uriel-soberanes-MxVkWPiJALs-unsplash.jpeg';

const TeamSectionStyles = styled.div`
  padding: 10rem 0;
  .team__wrapper {
    display: flex;
    gap: 1rem;
  }
  .team__info {
    max-width: 250px;
  }
  .team__subtitle {
    margin-bottom: 1rem;
    font-weight: 600;
    color: var(--mediumSlateBlue);
    text-transform: capitalize;
  }
  .team__members {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 5rem;
  }
  @media only screen and (max-width: 790px) {
    .team__wrapper {
      flex-direction: column;
      text-align: center;
      gap: 3rem;
    }
    .team__info {
      margin: 0 auto;
    }
    .team__members {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
`;

function TeamSection() {
  return (
    <TeamSectionStyles>
      <div className="container">
        <div className="team__wrapper">
          <div className="team__info">
            <ParagraphText className="team__subtitle">
              Team Members
            </ParagraphText>
            <SectionTitle className="about__title">
              The Best Team Available
            </SectionTitle>
          </div>
          <div className="team__members">
            <TeamMemberItem
              img={teamMember1}
              name="Raul Moor"
              title="Photo Editor"
            />
            <TeamMemberItem
              img={teamMember2}
              name="Sean Fergan"
              title="Photographer"
            />
            <TeamMemberItem
              img={teamMember3}
              name="Mike Costa"
              title="Photo Editor Assistant"
            />
          </div>
        </div>
      </div>
    </TeamSectionStyles>
  );
}

export default TeamSection;
