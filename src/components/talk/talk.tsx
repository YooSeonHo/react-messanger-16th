import styled from 'styled-components';
import TalkText from './talkText';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  chatSelector,
  listState,
  userState,
  ChatBoxState,
  nowUserState,
} from '../../state/state';
import { ListInfo, ChatInfo } from '../../interfaces/interface';
import { useEffect } from 'react';

const TalkBox = styled.div`
  display: flex;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Talk = () => {
  const [list, setList] = useRecoilState<ListInfo[]>(listState);
  const nowChat = useRecoilValue(chatSelector);
  const isUser = useRecoilValue(userState);
  const [chatList, setChatList] = useRecoilState<ChatInfo[]>(ChatBoxState); //chatting update할라고......
  const userNum = useRecoilValue<number>(nowUserState); //userId 쓸라고....

  useEffect(() => {
    setList(nowChat);
  }, [nowChat]);

  return (
    <TextBox>
      {chatList[userNum].chat.map((li, index) => (
        <TalkBox key={index}>
          <TalkText IsUser={li.IsUser} addText={li.addText} nowUser={isUser} />
        </TalkBox>
      ))}
    </TextBox>
  );
};

export default Talk;
