import React, { useCallback, useState } from 'react';
import {
  AddressSearch,
  BusinessNumbAuth,
  EmailAuth,
  MasterFormSection1,
  MasterFormSection2,
  MemberClothesForm,
  PhoneNumbForm,
  RockerNumbForm,
} from './styles';

const Master = () => {
  const [currentForm, setCurrentForm] = useState('form1');

  const handleNextForm = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const eventTarget = e.target as HTMLButtonElement;

      if (eventTarget.innerText === '다음') {
        setCurrentForm('form2');
      } else if (eventTarget.innerText === '이전') {
        setCurrentForm('form1');
      }
    },
    []
  );

  return (
    <>
      {currentForm === 'form1' ? (
        <MasterFormSection1>
          <input
            type='text'
            className='global-input'
            placeholder='대표자 이름'
          />
          <EmailAuth>
            <div>
              <input type='text' className='global-input email' />
              <span>@</span>
              <input type='text' className='global-input email' />
              <button className='btn'>인증</button>
            </div>
            <p className='error-message'>이메일 인증이 완료되었습니다.</p>
          </EmailAuth>
          <PhoneNumbForm>
            <select className='global-input phone'>
              <option>010</option>
              <option>011</option>
            </select>
            <span>-</span>
            <input type='text' className='global-input phone' />
            <span>-</span>
            <input type='text' className='global-input phone' />
          </PhoneNumbForm>
          <input type='text' className='global-input' placeholder='상호명' />
          <AddressSearch>
            <input
              type='text'
              className='global-input address'
              placeholder='주소'
            />
            <button className='btn'>검색</button>
          </AddressSearch>
          <BusinessNumbAuth>
            <div>
              <input
                type='text'
                className='global-input business'
                placeholder='사업자 번호'
              />
              <button className='btn'>확인</button>
            </div>
            <p className='error-message'>
              대표자와 사업자 번호를 확인할 수 없습니다.
            </p>
          </BusinessNumbAuth>
          <button className='next-btn' onClick={handleNextForm}>
            다음
          </button>
        </MasterFormSection1>
      ) : (
        <MasterFormSection2>
          <RockerNumbForm>
            <p>락커 총 횟수</p>
            <div>
              <input
                type='text'
                className='global-input rocker'
                placeholder='0'
              />
              <span>개</span>
            </div>
          </RockerNumbForm>
          <MemberClothesForm>
            <div className='clothes-check-warpper'>
              <p>회원복</p>
              <div>
                <label>
                  <input className='price-check' type='checkbox' />
                  금액 O
                </label>
                <label>
                  <input className='price-check' type='checkbox' />
                  금액 X
                </label>
              </div>
            </div>
            <p className='error-message'>
              회원복을 지원하지 않는 경우에는 ‘금액x’ 를 선택해주세요.
            </p>
          </MemberClothesForm>
          <button className='prev-btn' onClick={handleNextForm}>
            이전
          </button>
        </MasterFormSection2>
      )}
    </>
  );
};

export default Master;
