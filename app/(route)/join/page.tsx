'use client';
import Image from 'next/image';
import AccountLayout from '@/app/_layout/AccountLayout';
import Button from '@/app/_components/Button';
import { useCallback, useState } from 'react';
import { BasicForm, Description, KaKaoButton } from './styles';
import useInput from '@/app/hooks/useInput';
import ModalLayout from '@/app/_layout/ModalLayout';
import ChoiceUserTypeModal from '@/app/_components/Modal/ChoiceUserTypeModal';
import { idDuplicateCheckAPI } from '@/app/api/accout';

const Join = () => {
  const style = { background: '#041f86', color: 'white', height: '13.9%' };

  // id 중복확인
  const [id, onChangeId, setId] = useInput('');
  const [isDuplicateId, setIsDuplicateId] = useState<boolean>(true);

  const duplicateCheck = useCallback(async () => {
    const response = await idDuplicateCheckAPI(id);
    // id 중복인 경우
    if (response) {
      alert('이미 존재하는 아이디입니다.');
      setId('');
    } else {
      // id 중복 아닌 경우
      setIsDuplicateId(false);
    }
  }, [id]);

  // 비밀번호 확인
  const [password, onChangePassword] = useInput('');
  const [passwordcheck, setChangePasswordCheck] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const onChangePasswordCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const eventTarget = e.target as HTMLInputElement;

      setChangePasswordCheck(eventTarget.value);
      setPasswordError(eventTarget.value !== password);
    },
    [password]
  );

  // // 가입하는 유저의 타입에 따른 가입 정보
  // const [memberJoinForm, setMemberJoinForm] = useState({});
  // const [instructorJoinForm, setInstructorJoinForm] = useState({});
  // const [masterJoinForm, setMasterJoinForm] = useState({});

  const [isOpenUserTypeMoadl, setIsOpenUserTypeModal] = useState(false);
  // 회원가입 클릭 시, 유저 타입 선택 모달 오픈
  // 카카오 회원가입 시, 과정 끝내면 모달 오픈(찾아봐야함!)
  const handleUserTypeModal = useCallback(() => {
    console.log('회원가입');
    if (!passwordError && !isDuplicateId) {
      setIsOpenUserTypeModal((prev) => !prev);
    } else if (isDuplicateId) {
      console.log(isDuplicateId);
      alert('아이디 중복 확인을 해주세요.');
    }
  }, [isDuplicateId, passwordError]);

  return (
    <AccountLayout title={'회원가입'}>
      <BasicForm>
        <div className='id-check'>
          <input
            type='text'
            className='global-input id'
            placeholder='아이디'
            value={id}
            onChange={onChangeId}
          />
          <button onClick={duplicateCheck}>중복 확인</button>
        </div>
        <p className={`success-message ${!isDuplicateId}`}>
          사용 가능한 이메일입니다.
        </p>
        <input
          type='text'
          className='global-input password'
          placeholder='비밀번호'
          value={password}
          onChange={onChangePassword}
        />
        <input
          type='text'
          className='global-input password-check'
          placeholder='비밀번호 확인'
          value={passwordcheck}
          onChange={onChangePasswordCheck}
        />
        {passwordError && (
          <p className='error-message'>비밀번호가 일치하지 않습니다.</p>
        )}
      </BasicForm>
      <Button
        title='회원가입'
        style={style}
        onClickHandler={handleUserTypeModal}
      />
      <KaKaoButton>
        <Image
          src='/image/kakaoLogo.png'
          alt='kakaoLogo'
          width={30}
          height={25}
        />
        카카오 회원가입
      </KaKaoButton>
      <Description>
        이미 회원이신가요?<span className='strong'>로그인 하기</span>
      </Description>
      {isOpenUserTypeMoadl && (
        <ModalLayout onCloseModal={handleUserTypeModal}>
          <ChoiceUserTypeModal
            onCloseModal={handleUserTypeModal}
            accoutInfo={{ signname: id, password: password }}
          />
        </ModalLayout>
      )}
    </AccountLayout>
  );
};

export default Join;
