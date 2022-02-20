import styled, { css } from 'styled-components';
import theme from '../../style/theme';

const StyledHeader = styled.div(
    ({theme}) => css`
    display: flex;
    position: fixed;
    left: 0; top: 0;
    z-index: 10;

    &.scroll {
      background: ${theme.colors.primary};
  }    
`
)

export { StyledHeader }