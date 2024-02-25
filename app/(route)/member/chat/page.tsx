'use client';
import Image from 'next/image';
import MobileContentLayout from '@/app/_layout/MobileContentLayout';
import React from 'react';
import {
  ChatProfile,
  ChatSection,
  ChatInputSection,
  Section,
  StickyHeader,
} from './styles';
import Chat from '@/app/_components/Chat';

const ChatPage = () => {
  const date = '2024-02-24';
  const chats = [
    {
      id: 1,
      userId: 1,
      content: '나',
      time: '오후 1:31',
    },
    {
      id: 2,
      userId: 2,
      content: '상대방',
      time: '오후 1:31',
    },
    {
      id: 3,
      userId: 2,
      content: '상대방',
      time: '오후 1:31',
    },
  ];

  return (
    <MobileContentLayout title='채팅'>
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
        <span>김하정 강사</span>
      </ChatProfile>
      <ChatSection>
        <Section>
          <StickyHeader className={`section-${date}`} key={date}>
            <button>{date}</button>
          </StickyHeader>
          {/* Chat 컴포넌트에서 id(유저별 id)에 따라 위치, 색상 다르게 설정해주기! */}
          {chats.map((chat) => (
            <Chat key={chat.id} chat={chat} />
          ))}
        </Section>
        {/* {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section>
              <StickyHeader className={`section-${date}`} key={date}>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                <Chat key={chat.id} data={chat} />
              ))}
            </Section>
          );
        })} */}
      </ChatSection>
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
    </MobileContentLayout>
  );
};

export default ChatPage;
