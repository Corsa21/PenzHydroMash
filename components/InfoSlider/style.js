import styled, {css} from "styled-components";
import { Swiper } from 'swiper/react';
import {col} from "../../style/helpers";


const InfoSliderContainer = styled.section`
  display: flex;
`

const InfoSliderImageContainer = styled.div`
  width: ${col(11)};
  position: relative;
  
`

const InfoSliderImage = styled.img`
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  
  opacity: 0;
  transition: opacity .3s ease;
  
  @media (max-width: 720px) {
    height: 33vh;
    position: static;
    opacity: 1;
  }
`

const InfoSliderRightBar = styled.div`
  width: ${col(12)};
  
`
const InfoSliderItem = styled.div(
  ({theme}) => css`
    padding: ${col(1)};
    cursor: pointer;

    transition: background-color .3s ease;

    &:hover {
      background: ${theme.colors.grey2};
    }

    h5 {
      font-size: 25px;
      font-weight: 400;
      margin-bottom: 18px;
    }

    div {
      font-size: 18px;
      line-height: 1.8;
    }
  `
)

const MobileSlider = styled(Swiper)`

`


export {InfoSliderContainer,InfoSliderImageContainer, InfoSliderImage, InfoSliderRightBar, InfoSliderItem, MobileSlider}