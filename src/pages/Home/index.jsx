import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import HomePicture from '../../assets/home-page-img.svg';

const HomeDiv = styled.div`
  position: absolute;
  width: 1313px;
  height: 824px;
  left: 65px;
  top: 200px;
  background-color: ${colors.backgroundLight}
`;

const TextDiv = styled.div`
  position: absolute;
  width: 552px;
  height: 249px;
  left: 98px;
  top: 176px;
`;

const Text = styled.p`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 160.5%;
  color: #2F2E41;
  margin: 0;
`;

const ImageDiv = styled.div`
  position: absolute;
  width: 541px;
  height: 506px;
  left: 695px;
  top: 139px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const ButtonDiv = styled.div`
  position: absolute;
  width: 261px;
  height: 40px;
  left: 91px;
  top: 556px;
  border-radius: 29px;
  background-color: ${colors.primary}
`;

const NavText = styled.nav`
  text-align: center;
  padding-top: 7px;
`;

const StyledLink = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  color: white;
`;

function Home() {
  return (
    <HomeDiv>
      <TextDiv>
        <Text>Identify your needs, we take care of the rest, with the best talents</Text>
      </TextDiv>
      <ImageDiv>
        <Image src={HomePicture}/>
      </ImageDiv>
      <ButtonDiv>
        <NavText>
          <StyledLink to="/survey/1"> Take the survey </StyledLink>
        </NavText>
      </ButtonDiv>
    </HomeDiv>
  );
}

export default Home;
