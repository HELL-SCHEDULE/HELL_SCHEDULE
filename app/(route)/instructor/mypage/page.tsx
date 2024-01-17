'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader, Section } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContent, PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import {
  PageContentCustom,
  LeftSection,
  RightSection,
  MyInfoContent,
  ProfileImgSection,
  InfoSection,
} from './styles';
import SenterCard from '@/app/_components/SenterCard';
import { InfoWrapper } from '@/app/_components/Modal/InstructorDetailModal/styles';

const Mypage = () => {
  const instructor = {
    name: '김하정',
    phoneNumber: '010-****-****',
    email: '1234567@naver.com',
    license: ['자격증 A', '자격증 B'],
    career: ['커리어 A', '커리어 B'],
  };

  const senter = [
    {
      senterName: '헬스케줄1',
      masterName: '김하정1',
      phoneNumber: '010-****-****',
      address: '대전 어딘가',
    },
  ];
  // 프로필 수정 누르면 input활성화
  // 관리, 요청에 따른 버튼
  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <PageContentWrpper>
        <Title title={`마이페이지`} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li className='active'>관리</li>
              <li>요청</li>
            </ul>
          </SubNav>
        </ContentHeader>
        <PageContentCustom>
          <LeftSection>
            {senter.map((item, i) => (
              <SenterCard key={i} senter={item} />
            ))}
          </LeftSection>
          <RightSection>
            <div className='title'>내 정보</div>
            <MyInfoContent>
              <ProfileImgSection>
                {/* 등록된 이미지 있으면 이미지로 */}
                <Image
                  src='/icons/profile.svg'
                  alt='profile'
                  width={80}
                  height={80}
                />
              </ProfileImgSection>
              <InfoSection>
                <InfoWrapper>
                  <div className='strong'>
                    PROFILE
                    <Image
                      src='/icons/modify.svg'
                      alt='modify'
                      width={22}
                      height={22}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <div className='profile-info-wrapper'>
                    <div className='profile-info'>
                      <span className='info-title'>이름</span>
                      <input
                        type='text'
                        disabled={true}
                        value={instructor.name}
                        className='strong input'
                      ></input>
                    </div>
                    <div className='phone-section'>
                      <span className='info-title'>연락처</span>
                      <div className='phone-wrapper'>
                        <select
                          className='strong input phone'
                          disabled={true}
                          value={instructor.phoneNumber.split('-')[0]}
                        >
                          <option value={'010'}>010</option>
                          <option value={'011'}>011</option>
                        </select>
                        <span>-</span>
                        <input
                          type='text'
                          disabled={true}
                          value={instructor.phoneNumber.split('-')[1]}
                          className='strong input phone'
                        ></input>
                        <span>-</span>
                        <input
                          type='text'
                          disabled={true}
                          value={instructor.phoneNumber.split('-')[2]}
                          className='strong input phone'
                        ></input>
                      </div>
                    </div>
                    <div className='email-section'>
                      <span className='info-title'>이메일</span>
                      <div className='email-wrapper'>
                        <input
                          type='text'
                          disabled={true}
                          value={instructor.email.split('@')[0]}
                          className='strong input email'
                        ></input>
                        <span>@</span>
                        <select
                          className='email'
                          disabled={true}
                          value={instructor.email.split('-')[1]}
                        >
                          <option value={'naver'}>naver</option>
                          <option value={'google'}>google</option>
                        </select>
                        <button className='certify'>인증</button>
                      </div>
                    </div>
                  </div>
                </InfoWrapper>
                <InfoWrapper>
                  <div className='strong'>
                    LICENSE
                    <Image
                      src='/icons/plus.svg'
                      alt='plus'
                      width={18}
                      height={18}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <ul>
                    {instructor.license.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </InfoWrapper>
                <InfoWrapper>
                  <div className='strong'>
                    CAREER
                    <Image
                      src='/icons/plus.svg'
                      alt='plus'
                      width={18}
                      height={18}
                      style={{ cursor: 'pointer' }}
                    />
                  </div>
                  <ul>
                    {instructor.career.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </InfoWrapper>
              </InfoSection>
            </MyInfoContent>
          </RightSection>
        </PageContentCustom>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default Mypage;
