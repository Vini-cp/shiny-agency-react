import { useState, useEffect } from 'react';
import Card from '../../components/Card';
import styled from 'styled-components';
import colors from '../../utils/style/colors'

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
  const [freelanceProfiles, setFreelanceProfiles] = useState([])
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/freelances`)
        .then((response) => response.json()
        .then(({freelancersList}) => {
          setFreelanceProfiles(freelancersList)
          setDataLoading(false)
        })
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div>
      <Title>Find your provider</Title>
      <SubTitle>At Shiny we bring together the best profiles for you.</SubTitle>
      <CardsContainer>
        {freelanceProfiles.map((profile) => (
          <Card
            key={`${profile.name}-${profile.id}`}
            label={profile.job}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default Freelances;
