'use client';
import AccountLayout from '@/app/_layout/AccountLayout';
import { ResetPwForm } from './styles';
import Button from '@/app/_components/Button';
import { useCallback } from 'react';

const ResetPw = () => {
  const style = { background: '#041f86', color: 'white', height: '17.8%' };

  const onClickHandler = useCallback(() => {
    console.log('비밀번호 변경');
  }, []);

  return (
    <AccountLayout title={'비밀번호 재설정'}>
      <ResetPwForm>
        <p>변경할 비밀번호로 정확히 입력해 주세요.</p>
        <div className='input-wrppaer'>
          <div>비밀번호</div>
          <input type='text' className='account-input' />
        </div>
        <div className='input-wrppaer'>
          <div>비밀번호 확인</div>
          <input type='text' className='account-input' />
        </div>
        <p className='error-message'>비밀번호가 일치하지 않습니다.</p>
        <Button
          title={'비밀번호 변경'}
          style={style}
          onClickHandler={onClickHandler}
        />
      </ResetPwForm>
    </AccountLayout>
  );
};
export default ResetPw;
