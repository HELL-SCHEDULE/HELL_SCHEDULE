'use client';
import AccountLayout from '@/app/_layout/AccountLayout';
import Button from '@/app/_components/Button';
import Instructor from '@/app/_components/JoinUser/Instructor';
import Master from '@/app/_components/JoinUser/Master';
import Member from '@/app/_components/JoinUser/Member';
import { useCallback, useState } from 'react';
import { BasicForm, ChoiceUser, JoinForm, UserForm } from './styles';
import {
  SectionWrapper,
  SenterImgSection,
} from '@/app/_layout/AccountLayout/styles';

const Join = () => {
  const style = { background: '#041f86', color: 'white', height: '6.3%' };

  const [joinUserType, setJoinUserType] = useState('회원');

  const onClickJoinType = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const eventTarget = e.target as HTMLElement;
    setJoinUserType(eventTarget.innerText);
  }, []);

  const onClickHandler = useCallback(() => {
    console.log('회원가입');
  }, []);

  return (
    <SectionWrapper>
      <SenterImgSection>
        <div>backimg</div>
      </SenterImgSection>
      <JoinForm>
        <div className='form-title'>회원가입</div>
        <BasicForm>
          <div className='id-check'>
            <input type='text' className='global-input' />
            <button>중복 확인</button>
          </div>
          <input type='text' className='global-input' />
          <input type='text' className='global-input' />
          <p className='error-message'>비밀번호가 일치하지 않습니다.</p>
        </BasicForm>
        <ChoiceUser>
          <div
            className={`user-type ` + (joinUserType === '회원' ? 'select' : '')}
            onClick={onClickJoinType}
          >
            회원
          </div>
          <div
            className={`user-type ` + (joinUserType === '강사' ? 'select' : '')}
            onClick={onClickJoinType}
          >
            강사
          </div>
          <div
            className={
              `user-type ` + (joinUserType === '대표자' ? 'select' : '')
            }
            onClick={onClickJoinType}
          >
            대표자
          </div>
        </ChoiceUser>
        <UserForm>
          {joinUserType === '회원' ? (
            <Member />
          ) : joinUserType === '대표자' ? (
            <Master />
          ) : (
            <Instructor />
          )}
        </UserForm>
        <p className='error-message'>
          대표자와 사업자 번호를 확인할 수 없습니다.
        </p>
        <Button
          title='회원가입'
          style={style}
          onClickHandler={onClickHandler}
        />
      </JoinForm>
    </SectionWrapper>
  );
};

export default Join;
