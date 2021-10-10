import styled from 'styled-components';
import Image from '../../assets/page-404.svg'
import colors from '../../utils/style/colors';

const ErrorDiv = styled.div`
  position: absolute;
  width: 1313px;
  height: 1256px;
  left: 63px;
  top: 189px;

  background: ${colors.backgroundLight};
`;

const OupsDiv = styled.div`
  position: absolute;
  width: 463px;
  height: 77px;
  left: 425px;
  top: 99px;
`;

const ImageDiv = styled.img`
  position: absolute;
  width: 875px;
  height: 476px;
  left: 201px;
  top: 219px;
`;

const MessageDiv = styled.div`
  position: absolute;
  width: 878px;
  height: 127px;
  left: 208px;
  top: 765px;
`;

const Text = styled.div`
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: bold;
  font-size: 31px;
  line-height: 36px;
  text-align: center;

  color: ${colors.textcolor};
`;

function Error() {
  return (
    <ErrorDiv>
      <OupsDiv><Text>Oops...</Text></OupsDiv>
      <ImageDiv src={Image} />
      <MessageDiv><Text>It looks like there is a problem.</Text></MessageDiv>
    </ErrorDiv>
  );
}

export default Error;
