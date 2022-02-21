import { StyledBurgerMenu } from "./style";
import { useEffect, useState } from 'react';

const BurgerMenu = () => {
  const [resizeBurger, setBurgerMenu] = useState(false);
  useEffect(() => {
      if (window) {
          const resizeHandler = () => {
              setBurgerMenu(window.innerWidth <= 720);
          }
          window.addEventListener('resize', resizeHandler);
          return () => { window.removeEventListener('resize', resizeHandler) }
      }
  }, [])

    return (
      <StyledBurgerMenu className={resizeBurger ? 'burgerMenu' : 'burgerMenu_displayNone'} />
    )
  }
  
  
  export default BurgerMenu;