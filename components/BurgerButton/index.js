import { BurgerContainer, Button, ButtonTitle } from "./style";


const BurgerButton = ({children}) => {
  
    return (
      <BurgerContainer>
        <Button />
        <ButtonTitle>{children}</ButtonTitle>
      </BurgerContainer>
    )
  }
  
  
  export default BurgerButton;