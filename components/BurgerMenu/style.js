import styled,{css} from "styled-components";
import {col} from '../../style/helpers';
import theme from '../../style/theme';

const StyledBurgerMenu = styled.div(
  ({theme}) => css`
    height: 14px;
    width: 30px;
    border: 2px solid ${theme.colors.black1};
    border-left: none; border-right: none;
    margin-right: ${col(1)};
    cursor: pointer;
    position: relative;
    z-index: 999;
    display: flex;
    align-items: center;
    

    &.burgerMenu_displayNone {
      display: none;
    }

    &.burgerMenu {
      border: 2px solid #fff;
      border-left: none; border-right: none;
    }
  `
)

export { StyledBurgerMenu }