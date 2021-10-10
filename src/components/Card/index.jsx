import DefaultPicture from '../../assets/profile.png';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

const CardLabel = styled.span`
  position: relative;
  top: 27px;
  padding-left: 27px;
  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: ${colors.bordercolor};
`;

const CardImage = styled.img`
  position: relative;
  height: 148px;
  width: 148px;
  top: 80px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
`;

const CardName = styled.span`
  position: relative;
  top: 112px;

  font-family: Trebuchet MS;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 29px;

  text-align: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
      cursor: pointer;
      box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

function Card(props) {
  const { label, title, picture } = props;

  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardName>{title}</CardName>
    </CardWrapper>
  );
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture
};

export default Card;
