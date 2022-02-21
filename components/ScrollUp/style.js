import styled, {css} from "styled-components";
import { col, vw } from '../../style/helpers';

const ScrollUpContainer = styled.div(
    ({theme}) => css`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;

    svg {
        width: 40px;
    }
`
)

export { ScrollUpContainer }