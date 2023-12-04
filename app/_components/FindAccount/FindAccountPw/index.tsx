import React, { useCallback } from 'react';
import { FindAccountPwFrom } from './styles';
import Button from '../../Button';

const FindAccountPw = () => {
  const style = { background: '#041f86', color: 'white', height: '21.8%' };

  const onClickHandler = useCallback(() => {
    console.log('인증 메일 전송하기');
  }, []);

  return (
    <FindAccountPwFrom>
      <p>
        비밀번호를 잃어버리셨나요?
        <br />
        헬스케줄에 가입한 이메일을 정확히 입력해 주세요.
        <br />
        이메일을 통해 비밀번호 변경 링크가 전송됩니다.
      </p>
      <input
        className='account-input'
        type='text'
        placeholder='example@gmail.com'
      />
      <Button
        title={'인증 메일 전송하기'}
        style={style}
        onClickHandler={onClickHandler}
      />
    </FindAccountPwFrom>
  );
};

export default FindAccountPw;
