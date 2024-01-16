import Image from 'next/image';
import React from 'react';
import {
  SenterCardStyle,
  SenterCardInfo,
  SenterImgSection,
  SenterInfoSection,
  ButtonSection,
} from './styles';

interface Props {
  senter: { [key: string]: string };
}

const SenterCard = ({ senter }: Props) => {
  return (
    <SenterCardStyle>
      <SenterCardInfo>
        <SenterImgSection>
          <Image src='/icons/image.svg' alt='image' width={50} height={50} />
        </SenterImgSection>
        <SenterInfoSection>
          <div className='info-wrapper'>
            <span>상호명</span>
            <div>{senter.senterName}</div>
          </div>
          <div className='info-wrapper'>
            <span>대표자</span>
            <div>{senter.masterName}</div>
          </div>
          <div className='info-wrapper'>
            <span>전화번호</span>
            <div>{senter.phoneNumber}</div>
          </div>
          <div className='info-wrapper'>
            <span>위치</span>
            <div>{senter.address}</div>
          </div>
        </SenterInfoSection>
      </SenterCardInfo>
      <ButtonSection>
        <button>거절</button>
        <button>수락</button>
      </ButtonSection>
    </SenterCardStyle>
  );
};

export default SenterCard;
