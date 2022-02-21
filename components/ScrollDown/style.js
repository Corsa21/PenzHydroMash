import styled, {css} from "styled-components";
import { col } from '../../style/helpers';

const ScrollDownContainer = styled.div(
    ({theme}) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 708px;
    flex: 1 1 auto;

    svg {
        margin-top: 34px;
        width: 30px;
    }
`
)

const ScrollDownTitle = styled.div`
  text-transform: uppercase;
  writing-mode: vertical-rl;
  font-size: 14px;
  line-height: 16px;
  color: #1C1C1C;
`

export { ScrollDownContainer, ScrollDownTitle }