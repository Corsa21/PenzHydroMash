import Logo from './Logo';
import ItemsInfo from './ItemsInfo';
import styled from 'styled-components';

const  StyledHeader = styled.div`
  display: flex;
  position: fixed;
  left: 0; top: 0;
  z-index: 10;
`

export default function Header () {
    return (
        <StyledHeader>
            <Logo/>
            <ItemsInfo/>
        </StyledHeader>
    );
}