import React, { useCallback } from 'react';
import { FindAccountIdFrom } from './styles';
import Button from '../../Button';
import useInput from '@/app/hooks/useInput';

const FindAccountId = () => {
  const style = { background: '#041f86', color: 'white', height: '21.8%' };

  const [email, onChangeEmail, setEmail] = useInput('');

  const onClickHandler = useCallback(() => {
    console.log('아이디 찾기');
    // 이메일에 해당하는 아이디를 서버에서 성공해서 받을 경우
    alert('회원님의 아이디는 EXAMPLE입니다.');
    setEmail('');
    // 이메일에 해당하는 아이디가 없는 경우
    alert('입력하신 이메일을 찾을 수 없습니다.');
  }, [email]);

  return (
    <FindAccountIdFrom>
      <p>헬스케줄에 가입한 이메일을 정확히 입력해 주세요.</p>
      <input
        className='global-input'
        type='text'
        placeholder='example@gmail.com'
        value={email}
        onChange={onChangeEmail}
      />
      <Button
        title={'아이디 찾기'}
        style={style}
        onClickHandler={onClickHandler}
      />
    </FindAccountIdFrom>
  );
};

export default FindAccountId;
