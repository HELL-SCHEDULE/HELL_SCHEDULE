'use client';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import Link from 'next/link';
import {
  AdminPageContent,
  ButtonSection,
  InfoModifyContent,
  InfoModifySection,
  TitleSection,
} from './styles';
import { InputWrapper } from '@/app/_components/Modal/MemberRgMdModal/styles';

const Admin = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'센터 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>
                <Link href={'/master/senter/admin'}>센터 정보 수정</Link>
              </li>
              <li>
                <Link href={'/master/senter/delete'}>탈퇴</Link>
              </li>
            </ul>
          </SubNav>
        </ContentHeader>
        <AdminPageContent>
          <InfoModifySection>
            <InfoModifyContent>
              <InputWrapper height={'5.8%'} style={{ marginBottom: '4%' }}>
                <div className='main-title'>본인 인증</div>
                <span className='input-title'>이메일</span>
                <div className='input-content'>
                  <input className='input email' type='text' />
                  <span className='mark'>@</span>
                  <select className='input email'>
                    <option>naver.com</option>
                    <option>gmail.com</option>
                  </select>
                  <button className='btn'>인증</button>
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'>센터 정보 수정</div>
                <span className='input-title'>대표자</span>
                <div className='input-content'>
                  <input className='input email' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>핸드폰 번호</span>
                <div className='input-content'>
                  <select className='input phone'>
                    <option>010</option>
                    <option>011</option>
                  </select>
                  <span className='mark'>-</span>
                  <input type='text' className='input phone' />
                  <span className='mark'>-</span>
                  <input type='text' className='input phone' />
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>상호명</span>
                <div className='input-content'>
                  <input className='input' type='text' />
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>사업자 번호</span>
                <div className='input-content'>
                  <input className='input' type='text' />
                  <button className='btn'>확인</button>
                  <p className='error-message'>
                    대표자와 사업자 번호를 확인할 수 없습니다.
                  </p>
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>센터 주소</span>
                <div className='input-content'>
                  <input className='input address' type='text' />
                  <button className='btn'>검색</button>
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>락커 총 개수</span>
                <div className='input-content'>
                  <input className='input count' type='text' />
                  <span className='mark'>개</span>
                </div>
              </InputWrapper>
              <InputWrapper height={'5.8%'}>
                <div className='main-title'></div>
                <span className='input-title'>회원복</span>
                <div className='input-content'>
                  <label className='look-label'>
                    <input className='input check' type='checkbox' />
                    금액 O
                  </label>
                  <label className='look-label'>
                    <input className='input check' type='checkbox' />
                    금액 X
                  </label>
                  <p className='error-message'>
                    회원복을 지원하지 않는 경우에는 ‘금액x’ 를 선택해주세요.
                  </p>
                </div>
              </InputWrapper>
              <ButtonSection>
                <button className='candel'>취소</button>
                <button className='modify'>수정</button>
              </ButtonSection>
            </InfoModifyContent>
          </InfoModifySection>
        </AdminPageContent>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Admin;
