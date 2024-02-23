'use client';
import Image from 'next/image';
import Title from '@/app/_components/Title';
import NavBar from '@/app/_layout/NavBar';
import SubNav from '@/app/_layout/SubNav';
import { ContentHeader } from '@/app/_layout/SubNav/styles';
import WebLayout from '@/app/_layout/WebLayout';
import { PageContentWrpper } from '@/app/_layout/WebLayout/styles';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import {
  PageContentCustom,
  InstructorProfile,
  LeftSection,
  ListSection,
  RightSection,
  SearchSection,
  ChatProfile,
  ChatSection,
  ChatInputSection,
} from './styles';
import ChatMemberList from '@/app/_components/ChatMemberList';

const MemberList = () => {
  const members = ['회원 A', '회원 B', '회원 C']; // 전체 회원
  const [isOpenSearchSection, setIsOpenSearchSection] = useState(false);

  const [selectMember, setSelectMember] = useState('');

  const handleSearchSection = useCallback(() => {
    setIsOpenSearchSection((prev) => !prev);
  }, []);

  return (
    <WebLayout>
      <NavBar user={'instructor'} />
      <PageContentWrpper>
        <Title title={'채팅'} />
        <ContentHeader>
          <SubNav>
            <ul>
              <li>
                <Link href={'/instructor/chat/history'}>최근 채팅 목록</Link>
              </li>
              <li className='active'>
                <Link href={'/instructor/chat/memberList'}>회원 목록</Link>
              </li>
            </ul>
          </SubNav>
        </ContentHeader>
        <PageContentCustom>
          <LeftSection>
            <InstructorProfile>
              <span>
                김하정 <span className='basic'>강사</span>
              </span>
              <Image
                src='/image/search.png'
                alt='search'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: '7%', height: 'auto', cursor: 'pointer' }}
                onClick={handleSearchSection}
              />
            </InstructorProfile>
            {isOpenSearchSection && (
              <SearchSection>
                <div className='search-wrapper'>
                  <input type='text' />
                  <div className='icon-wrapper'>
                    <Image
                      src='/image/search.png'
                      alt='search'
                      width={0}
                      height={0}
                      sizes='100vw'
                      style={{
                        width: '55%',
                        height: 'auto',
                        cursor: 'pointer',
                      }}
                    />
                  </div>
                </div>
                <Image
                  src='/icons/close_modal.svg'
                  alt='close_modal'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '5%', height: 'auto', cursor: 'pointer' }}
                  onClick={handleSearchSection}
                />
              </SearchSection>
            )}

            <ListSection height={`${isOpenSearchSection ? '80%' : '90%'}`}>
              {members.map((member, i) => (
                <ChatMemberList
                  key={i}
                  member={member}
                  selectMember={selectMember}
                  setSelectMember={setSelectMember}
                />
              ))}
            </ListSection>
          </LeftSection>
          <RightSection>
            <ChatProfile>
              <div className='profile'>
                <Image
                  src='/icons/profile.svg'
                  alt='profile'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '45%', height: 'auto' }}
                />
              </div>
              <span>{selectMember}</span>
            </ChatProfile>
            <ChatSection></ChatSection>
            <ChatInputSection>
              <input type='text' />
              <button>
                <Image
                  src='/image/send.png'
                  alt='send'
                  width={0}
                  height={0}
                  sizes='100vw'
                  style={{ width: '50%', height: 'auto', cursor: 'pointer' }}
                />
              </button>
            </ChatInputSection>
          </RightSection>
        </PageContentCustom>
      </PageContentWrpper>
    </WebLayout>
  );
};

export default MemberList;
