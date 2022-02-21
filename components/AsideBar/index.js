import BurgerButton from "../BurgerButton/index";
import ScrollDown from "../ScrollDown";
import ScrollUp from "../ScrollUp";
import { AsideContainer } from "./style";


export default function AsideBar () {
    return (
        <AsideContainer>
            <BurgerButton>Меню</BurgerButton>
            <ScrollDown/>
            <ScrollUp/>
        </AsideContainer>
    );
}