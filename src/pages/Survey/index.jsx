import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/Navigation';
import colors from '../../utils/style/colors';
import Loader from '../../utils/Atoms'

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
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)

  useEffect(() => {
    setDataLoading(true)
    fetch(`http://localhost:8000/survey`)
        .then((response) => response.json()
        .then(({ surveyData }) => {
          setSurveyData(surveyData)
          setDataLoading(false)
        })
        .catch((error) => console.log(error))
    )
  }, [])

  return (
    <div>
      <Header>Question {questionNumber}</Header>
      {isDataLoading ? (
        <Loader />
      ) : (
        <Text>{surveyData[questionNumber]}</Text>
      )}
      <ButtonYes type="button"><ButtonText>Yes</ButtonText></ButtonYes>
      <ButtonNo type="button"><ButtonText>No</ButtonText></ButtonNo>
      <Navigation questionNumber={questionNumber}></Navigation>      
    </div>
  );
}

export default Survey;
