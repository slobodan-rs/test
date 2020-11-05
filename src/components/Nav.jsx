import styled from 'styled-components'
import burger from '../icons/burger.svg'

const Nav = styled.nav`
    width: 100%;
    height: 89px;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: 'inline-block';
    
    a {
        text-decoration: none;
        float: left;
        padding: 30px 16px;
        font-family: Fira Sans;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #242728;
    }
    @media(max-width: 1024px){
        position: relative;
        background-image: url(${burger});
        background-repeat: no-repeat;
        background-position-x: 10px;
        background-position-y: 20px;
        height: ${({ expand }) => expand ? '100vh' : '79px'};
        display: ${({ expand }) => expand ? 'block' : 'inline-block'};
        z-index: 1;
        background-color: white;
        transition: height 0.2s;
    }
`
export default Nav