import colors from './style/colors'
import styled, { keyframes } from 'styled-components'
 
const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
 
    to {
    transform: rotate(360deg);
    }
`
 
const Loader = styled.div`
    position: absolute;
    width: 833px;
    height: 70px;
    left: 700px;
    top: 375px;
    padding: 10px;
    border: 6px solid ${colors.primary};
    border-bottom-color: transparent;
    border-radius: 22px;
    animation: ${rotate} 1s infinite linear;
    height: 0;
    width: 0;
`

export default Loader;
