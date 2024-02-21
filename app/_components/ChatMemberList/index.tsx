import Image from 'next/image';
import React, { useCallback, useState } from 'react';
import {
  ChatInfoSection,
  ChatMemberListStyle,
  Info_1,
  Info_2,
  ProfileSection,
} from './styles';

interface Props {
  member: string;
  selectMember: string;
  setSelectMember: React.Dispatch<React.SetStateAction<string>>;
}
const ChatMemberList = ({ member, selectMember, setSelectMember }: Props) => {
  console.log(selectMember, member);
  return (
    <ChatMemberListStyle
      focus={`${selectMember === member ? `true` : `false`}`}
      onClick={() => {
        setSelectMember(member);
      }}
    >
      <ProfileSection>
        <Image
          src='/icons/profile.svg'
          alt='profile'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: '45%', height: 'auto' }}
          priority
        />
      </ProfileSection>
      <ChatInfoSection>
        <Info_1>
          <span className='person'>{member}</span>
          <span className='time'>오후 1:31</span>
        </Info_1>
        <Info_2>
          <span>대화 내용...</span>
          <span className='alarm'>3</span>
        </Info_2>
      </ChatInfoSection>
    </ChatMemberListStyle>
  );
};

export default ChatMemberList;
