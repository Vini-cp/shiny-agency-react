import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import colors from '../../utils/style/colors';

const Header = styled.h2`
  position: absolute;
  width: 173px;
  height: 22px;
  left: 624px;
  top: 273px;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: ${colors.bordercolor};
`;

const Text = styled.p`
  position: absolute;
  width: 833px;
  height: 70px;
  left: 273px;
  top: 358px;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: ${colors.textcolor};
`;

const ButtonYes = styled.button`
  position: absolute;
  width: 291px;
  height: 96px;
  left: 399px;
  top: 491px;

  background: ${colors.backgroundLight};
  border: 2px solid ${colors.bordercolor};
  box-sizing: border-box;
  border-radius: 31px;
`;

const ButtonNo = styled.button`
  position: absolute;
  width: 291px;
  height: 96px;
  left: 732px;
  top: 491px;

  background: ${colors.backgroundLight};
  border: 2px solid ${colors.bordercolor};
  box-sizing: border-box;
  border-radius: 31px;
`;

const ButtonText = styled.p`
  text-align: center;
  justify-content: center;
  vertical-align: middle;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 29px;
  text-align: center;

  color: ${colors.textcolor};
`;


function Survey() {
  const { questionNumber } = useParams();

  return (
    <div>
      <Header>Question {questionNumber}</Header>
      <Text>Does your app have to appear first in search results?</Text>
      <ButtonYes type="button"><ButtonText>Yes</ButtonText></ButtonYes>
      <ButtonNo type="button"><ButtonText>No</ButtonText></ButtonNo>
      <Navigation questionNumber={questionNumber}></Navigation>      
    </div>
  );
}

export default Survey;
