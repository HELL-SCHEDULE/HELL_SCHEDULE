import React, { useCallback } from 'react';
import { FindAccountPwFrom } from './styles';
import Button from '../../Button';
import useInput from '@/app/hooks/useInput';

const FindAccountPw = () => {
  const style = { background: '#041f86', color: 'white', height: '21.8%' };

  const [email, onChangeEmail, setEmail] = useInput('');

  const onClickHandler = useCallback(() => {
    console.log('인증 메일 전송하기');
    // 입력한 이메일에 비밀번호 변경 링크 전송 성공
    alert(`${email}에 비밀번호 변경 링크가 전송되었습니다.`);
    setEmail('');

    // 입력한 이메일이 없는 경우
    alert('입력하신 이메일을 찾을 수 없습니다.');
  }, [email]);

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
        className='global-input'
        type='text'
        placeholder='example@gmail.com'
        value={email}
        onChange={onChangeEmail}
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
