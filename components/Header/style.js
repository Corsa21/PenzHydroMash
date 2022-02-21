import styled, { css } from 'styled-components';
import theme from '../../style/theme';
import {col} from '../../style/helpers';

const StyledHeader = styled.div(
    ({theme}) => css`
    display: flex;
    position: fixed;
    left: 0; top: 0;
    z-index: 10;

    &.scroll {
      background: ${theme.colors.primary};
  }    

  @media (max-width:720px) {
    width: ${col(24)};
  }
`
)

export { StyledHeader }