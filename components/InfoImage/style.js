import styled from 'styled-components';
import {col} from "../../style/helpers";


const InfoImageContainer = styled.section`
  display: flex;
  margin-top: 100px;

  @media (max-width:720px) {
    flex-direction: column;
  }
`

const InfoImagePicture = styled.img`
  width: ${col(11)};
  object-fit: cover;
  
  @media (max-width:720px) {
    width: ${col(24)}
  }
`

const InfoImageText = styled.div`
  width: ${col(12)};
  padding: 0 ${col(1)};
  font-size: 18px;
  line-height: 1.8;

  @media (max-width:720px) {
    width: ${col(22)};
    padding-top: 30px;
  }
  
  
  p {
    margin-bottom: 30px;
    &:first-child {
      font-weight: 400;
    }
  }
`


export {InfoImageContainer, InfoImagePicture, InfoImageText}