import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../assets/shiny-logo.png';

const StyledHeader = styled.div`
  position: absolute;
  height: 200px;
  width: 1440px;
  display: flex;
  flex-direction: row;
`;

const HeaderLogo = styled.img`
  position: absolute;
  width: 187.63px;
  height: 70px;
  left: 33px;
  top: 30px;
`;

const ImageDiv = styled.div`
  height: 100px;
  width: 30%;
`;

const NavigationDiv = styled.div`
  height: 100px;
  width: 80%;
  padding-right: 81px;
  display: flex;
  justify-content: right;
  align-items: center;
`;

const NavText = styled.nav`
  vertical-align: middle;
  display: inline-block;
`;

const StyledLink = styled(Link)`
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${( {isFullLink} ) =>
      isFullLink && 
      `color: white; border-radius: 30px; background-color: ${colors.primary};`}
`;

function Header() {
  return (
    <StyledHeader>
      <ImageDiv>
        <HeaderLogo src={Logo} alt="freelance" />
      </ImageDiv>
      <NavigationDiv>
        <NavText>
          {/* <StyledLink to="/" isFullLink={true}>Accueil </StyledLink> */}
          <StyledLink to="/" >Home </StyledLink>
          <StyledLink to="/Freelances"> Profiles </StyledLink>
          <StyledLink to="/survey/1" isFullLink={true}> Take the survey </StyledLink>
        </NavText>
      </NavigationDiv>
    </StyledHeader>
  );
}

export default Header;
