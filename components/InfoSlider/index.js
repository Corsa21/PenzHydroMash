import { SwiperSlide } from 'swiper/react';

import { InfoSliderContainer, InfoSliderImageContainer, InfoSliderImage, InfoSliderRightBar, InfoSliderItem, MobileSlider} from "./style";

// Import Swiper styles
import 'swiper/css';
import {useEffect, useState} from "react";


const InfoSlider = (props) => {

  const { slides } = props;
  const [activeSlide, setActiveSlide] = useState(0);
  const [device, setDevice] = useState('desktop');

  useEffect(()=> {

    if(window) {
      const resizeHandler = () => {
        setDevice(window.innerWidth <= 720 ? 'mobile': 'desktop')
      };
      resizeHandler();
      window.addEventListener('resize', resizeHandler)
      return () => window.removeEventListener('resize', resizeHandler)
    }
  },[])

  return ( device === 'desktop' ?
      (<InfoSliderContainer>
        <InfoSliderImageContainer>
          { slides.map((slide, index) => (
            <InfoSliderImage
              src={slide.src}
              key={index}
              style={{opacity: activeSlide === index ? 1 : 0}}
            />))}
        </InfoSliderImageContainer>
        <InfoSliderRightBar>
          { slides.map((slide, index) => (
            <InfoSliderItem key={index} onMouseEnter={()=>setActiveSlide(index)}>
              <h5>{slide.title}</h5>
              <div dangerouslySetInnerHTML={{__html: slide.text}}/>
            </InfoSliderItem>))
          }
        </InfoSliderRightBar>
      </InfoSliderContainer>)
      : (<MobileSlider>
        {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <InfoSliderImage src={slide.src}/>
              <InfoSliderItem>
                <h5>{slide.title}</h5>
                <div dangerouslySetInnerHTML={{__html: slide.text}}/>
              </InfoSliderItem>
            </SwiperSlide>
          ))
        }
        </MobileSlider>
      )
  )
}


export default InfoSlider