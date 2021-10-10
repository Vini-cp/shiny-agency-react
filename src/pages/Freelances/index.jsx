import DefaultPicture from '../../assets/profile.png';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors'

const freelanceProfiles = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Developpeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeuse Fullstack',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeur backend',
    picture: DefaultPicture,
  },
];

const Title = styled.p`
  position: absolute;
  width: 448px;
  height: 45px;
  left: 500px;
  top: 226px;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 132.5%;

  text-align: center;

  color: ${colors.textcolor};
`;

const SubTitle = styled.p`
  position: absolute;
  width: 1002px;
  height: 27px;
  left: 202px;
  top: 323px;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 132.5%;

  text-align: center;

  color: ${colors.secondary};
`;

const CardsContainer = styled.div`
  display: grid;
  position: absolute;
  left: 342px;
  top: 447px;
  gap: 52px 70px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

function Freelances() {
  return (
    <div>
      <Title>Find your provider</Title>
      <SubTitle>At Shiny we bring together the best profiles for you.</SubTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Freelances;
