import styled, {css} from "styled-components";
import {col, vh} from "../../style/helpers";


const InfoblockContainer = styled.section(
  ({theme}) => css`
      padding: ${vh(160)} ${col(1)} ${vh(50)};
      font-weight: 300;
      color: ${theme.colors.black1};
      display: flex;
  `
)
const InfoblockTitle = styled.h3(
  ({theme}) => css`
    width: ${col(6)};
    font-size: 47px;
    font-weight: inherit;

  `
);

const InfoblockText = styled.div(
  ({theme}) => css`
    padding-top: 40px;
    width: ${col(15)};
    font-size: 25px;

  `
)


export { InfoblockContainer, InfoblockTitle, InfoblockText };