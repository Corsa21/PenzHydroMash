import Logo from '../Logo/index';
import ItemsInfo from '../ItemsInfo/index';
import { StyledHeader } from './style';
import { useEffect, useState } from 'react';

export default function Header () {
    const [scrollHeader, setScrollHeader] = useState(false);
    useEffect(()=>{
        if(window) {
            const scrollHandler = () => {
                setScrollHeader(window.scrollY >= 800)
            }
            window.addEventListener('scroll', scrollHandler)
            return () => {window.removeEventListener('scroll', scrollHandler)}
        }
    },[])
    
    return (
        <StyledHeader className={scrollHeader ? 'scroll' : ''}>
            <Logo/>
            <ItemsInfo/>
        </StyledHeader>
    );
}