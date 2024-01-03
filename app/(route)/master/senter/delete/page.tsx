'use client';
import Image from 'next/image';
import { InputWrapper } from '@/app/_components/Modal/MemberRgModal/styles';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import Link from 'next/link';
import {
  DeletePageContent,
  CertificateContent,
  CertificateSection,
  WarningContent,
  WarningList,
  WarningSection,
} from './styles';

const Delete = () => {
  return (
    <WebLayout>
      <NavBar user={'master'} />
      <PageContentWrpper>
        <Title title={'센터 관리'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li>
                <Link href={'/master/senter/admin'}>센터 정보 수정</Link>
              </li>
              <li className='active'>
                <Link href={'/master/senter/delete'}>탈퇴</Link>
              </li>
            </ul>
          </SubNav>
        </ContentHeader>
        <DeletePageContent>
          <CertificateSection>
            <CertificateContent>
              <div className='main-title'>본인 인증</div>
              <div className='certificate-input'>
                <InputWrapper height={'39.8%'} style={{ marginBottom: '4%' }}>
                  <span className='input-title'>이메일</span>
                  <div className='input-content'>
                    <input className='input email' type='text' />
                    <span className='mark'>@</span>
                    <select className='input email'>
                      <option>naver.com</option>
                      <option>gmail.com</option>
                    </select>
                  </div>
                </InputWrapper>
                <InputWrapper height={'39.8%'}>
                  <span className='input-title'>비밀번호</span>
                  <div className='input-content'>
                    <input className='input email' type='text' />
                  </div>
                </InputWrapper>
              </div>
              <div className='button-section'>
                <button>본인 인증</button>
              </div>
            </CertificateContent>
            <p className='error-message'>
              <Image
                src='/icons/warning.svg'
                alt='warning'
                width={16}
                height={16}
              />
              회원탈퇴를 신청하기 전에 안내 사항을 꼭 확인해주세요.
            </p>
          </CertificateSection>
          <WarningSection>
            <WarningContent>
              <WarningList>
                <div className='warning-item'>
                  <div className='warning-title'>
                    <input type='checkbox' />
                    사용하고 계신 계정은 탈퇴할 경우 재사용 및 복구가
                    불가능합니다.
                  </div>
                  <div className='warning-content'>
                    탈퇴한 계정은 본인과 타인 모두 재사용 및 복구가 불가하오니
                    신중하게 선택하시기 바랍니다.
                  </div>
                </div>
              </WarningList>
              <WarningList>
                <div className='warning-item'>
                  <div className='warning-title'>
                    <input type='checkbox' />
                    탈퇴 후 회원정보 및 서비스 이용기록 및 데이터는 모두
                    삭제됩니다.
                  </div>
                  <div className='warning-content'>
                    회원정보 및 서비스 이용기록, 분석 측정 데이터는 모두
                    삭제되며, 삭제된 데이터는 복구되지 않습니다. <br />
                    삭제되는 내용을 확인하시고 필요한 데이터는 미리 백업을
                    해주시기 바랍니다.
                  </div>
                </div>
              </WarningList>
              <WarningList>
                <div className='warning-item'>
                  <div className='warning-title'>
                    <input type='checkbox' />
                    안내 사항을 모두 확인하였으며, 이에 동의합니다.
                  </div>
                </div>
                <div className='button-section'>
                  <button>탈퇴하기</button>
                </div>
              </WarningList>
            </WarningContent>
          </WarningSection>
        </DeletePageContent>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Delete;
