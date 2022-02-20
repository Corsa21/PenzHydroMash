import styled,{css} from "styled-components";

const BurgerContainer = styled.div(
  ({theme}) => css`
    color: ${theme.colors.black1};
    font-size: 14px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 45px 0;
    cursor: pointer;
  `
)


const Button = styled.div(
  ({theme}) => css`
    height: 14px;
    width: 30px;
    border: 2px solid ${theme.colors.black1};
    border-left: none; border-right: none;
    margin-bottom: 20px;
  `
)

const ButtonTitle = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  writing-mode: vertical-rl;
`

export { BurgerContainer, Button, ButtonTitle }