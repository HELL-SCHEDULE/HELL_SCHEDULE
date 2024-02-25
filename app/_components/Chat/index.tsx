import React from 'react';
import { ChatWrapper } from './styles';

interface Props {
  chat: { [key: string]: any };
}
const Chat = ({ chat }: Props) => {
  const myId = 1; //로그인 시, 내 id 가져오기

  return (
    <ChatWrapper type={`${chat.id === myId ? 'true' : 'false'}`}>
      <div className='chat-content'>{chat.content}</div>
      <div className='chat-time'>{chat.time}</div>
    </ChatWrapper>
  );
};

export default Chat;
