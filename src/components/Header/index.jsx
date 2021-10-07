import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import Logo from '../../assets/shiny-logo.png';

const HeaderLogo = styled.img`
    height: 70px;
    padding: 30px 0 30px 33px;
    border-radius: 50%;
`;

const StyledHeader = styled.div`
    height: 130px;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const ImageDiv = styled.div`
    height: 100px;
    width: 30%;
`;

const NavigationDiv = styled.div`
    height: 100px;
    width: 80%;
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
  );s
}

export default Header;
