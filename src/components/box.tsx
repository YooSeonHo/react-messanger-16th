import styled from 'styled-components';
import React from 'react';

const ChatBox = styled.main`
  position: absolute;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: stretch;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 400px;
  height: 600px;
  border: 10px black;
  border-radius: 7%;
  background-color: white;
  box-shadow: 1px 1px 3px 1px #dadce0;
  line-height: 1;
  margin: auto;
`;

const Box = () => {
  return <ChatBox />;
};

export default Box;
