import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const ResultsDiv = styled.div`
  position: absolute;
  width: 1313px;
  height: 825px;
  left: 65px;
  top: 200px;

  background: ${colors.backgroundLight};
`;

const Title = styled.div`
  position: absolute;
  width: 463px;
  height: 77px;
  left: 423px;
  top: 113px;
`;

const Text = styled.p`
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 35px;
  text-align: center;
  color: #000000;
`;

const ColoredText = styled.span`
  color: ${colors.bordercolor}
`;

const ButtonDiv = styled.div`
  position: absolute;
  width: 317px;
  height: 40px;
  left: 502px;
  top: 306px;

  border-radius: 29px;
  background-color: ${colors.primary}
`;

const NavText = styled.nav`
  text-align: center;
  padding-top: 7px;
`;

const StyledLink = styled(Link)`
  font-family: Comfortaa;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 132.5%;
  text-decoration: none;
  color: white;
`;

const Profiles = styled.div`
  position: absolute;
  width: 716px;
  height: 370px;
  left: 325px;
  top: 418px;
`;

const ProfilesText = styled.p`
  font-family: Comfortaa;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 132.5%;
`;

function Results() {
  return (
    <ResultsDiv>
      <Title>
        <Text>
          Les compétences dont vous avez besoin : <ColoredText>UX Design, frontend, backend</ColoredText>
        </Text>
      </Title>
      <ButtonDiv>
        <NavText>
          <StyledLink to="/freelances"> Discover our profiles </StyledLink>
        </NavText>
      </ButtonDiv>
      <Profiles>
        <ProfilesText>
          <ColoredText>UX Design</ColoredText><br />
          Le rôle de l’UX est de Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        </ProfilesText>
        <ProfilesText>
          <ColoredText>Frontend</ColoredText><br />
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        </ProfilesText>
        <ProfilesText>
          <ColoredText>Backend</ColoredText><br />
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ProfilesText>
      </Profiles>
    </ResultsDiv>
  );
}

export default Results;
