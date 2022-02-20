import styled from 'styled-components';
import {col} from "../../style/helpers";


const InfoImageContainer = styled.section`
  display: flex;
  margin-top: 100px;
`

const InfoImagePicture = styled.img`
  width: ${col(11)};
`

const InfoImageText = styled.div`
  width: ${col(12)};
  padding: 0 ${col(1)};
  font-size: 18px;
  line-height: 1.8;
  
  
  p {
    margin-bottom: 30px;
    &:first-child {
      font-weight: 400;
    }
  }
`


export {InfoImageContainer, InfoImagePicture, InfoImageText}