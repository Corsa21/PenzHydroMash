import Logo from '../Logo/index';
import ItemsInfo from '../ItemsInfo/index';
import { StyledHeader } from './style';
import { useEffect, useState } from 'react';
import BurgerMenu from '../BurgerMenu';

export default function Header() {
    const [scrollHeader, setScrollHeader] = useState(false);
    useEffect(() => {
        if (window) {
            const scrollHandler = () => {
                setScrollHeader(window.scrollY >= 70)
            }
            window.addEventListener('scroll', scrollHandler)
            return () => { window.removeEventListener('scroll', scrollHandler) }
        }
    }, [])

    

    return (
        <StyledHeader className={scrollHeader ? 'scroll' : ''}>
            <Logo />
            <ItemsInfo />
            <BurgerMenu />
        </StyledHeader>
    );
}