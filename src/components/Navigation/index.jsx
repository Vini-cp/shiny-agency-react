import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const StyledLinkNext = styled(Link)`
  position: absolute;
  width: 102px;
  height: 24px;
  left: 754px;
  top: 650px;
  ${( {isFirst} ) =>
      (isFirst && `left: 660px;`)}
`;

const StyledLinkPrevious = styled(Link)`
  position: absolute;
  width: 116px;
  height: 24px;
  left: 565px;
  top: 650px;
`;

const Text = styled.p`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  text-decoration-line: underline;

  color: ${colors.textcolor};
`;

function Navigation(props) {
  const { questionNumber } = props;
  const questionInt = parseInt(questionNumber);
  const prevQuestionNbr = questionInt === 1 ? 1 : questionInt - 1;
  const nextQuestionNbr = questionInt + 1;
  const isFirst = questionInt === 1 ? true : false;

  return (
    <div>
      <nav>
        {questionInt > 1 ? (
          <StyledLinkPrevious to={`/survey/${prevQuestionNbr}`}><Text>Previous</Text> </StyledLinkPrevious>
        ) : (
        null
        )}
        {questionInt < 10 ? (
          <StyledLinkNext to={`/survey/${nextQuestionNbr}`} isFirst={isFirst}><Text>Next</Text> </StyledLinkNext>
        ) : (
          <StyledLinkNext to="/results"><Text>Results</Text></StyledLinkNext>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
