import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../state/state';
import { userSelector, chatSelector } from '../../state/state';
import { ChatBoxState, nowUserState } from '../../state/state';
import { ChatInfo } from '../../interfaces/interface';

const Icon = styled.button`
  position: relative;
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eee;
  margin-top: 18px;
  border: none;
  margin-left: 130px;
  margin-right: auto;
  :hover {
    cursor: grab;
  }
`;

const User = () => {
  const [isUser, setIsUser] = useRecoilState(userState);
  const [name, setName] = useState('');
  const [chatList, setChatList] = useRecoilState<ChatInfo[]>(ChatBoxState); //chatting update할라고......
  const userNum = useRecoilValue<number>(nowUserState); //userId 쓸라고....

  const nowUser = useRecoilValue(userSelector);

  const changeUser = () => {
    setIsUser(!isUser);
    if (isUser) {
      setName('유선호');
    } else {
      setName(chatList[userNum].userName);
    }
  };

  useEffect(() => {
    setName(chatList[userNum].userName);
    setIsUser(true);
  }, []);

  return (
    <>
      {nowUser.userName === '유선호' ? (
        <Icon>{name}</Icon>
      ) : (
        <Icon onClick={changeUser}>{name}</Icon>
      )}
    </>
  );
};

export default User;
