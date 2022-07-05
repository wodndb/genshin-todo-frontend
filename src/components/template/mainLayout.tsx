import React from 'react';
import styled from 'styled-components';

export type MainLayoutProps = {
  tabs: React.ReactNode;
  body: React.ReactNode;
};

const MainLayout = ({tabs, body}: MainLayoutProps) => {
  return (
    <Root>
      <Tab>{tabs}</Tab>
      <Body>{body}</Body>
    </Root>
  );
};

const Root = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #aaa;
`;

const Tab = styled.div`
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: #aae;
`;

const Body = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  background-color: #eaa;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
`;

export default MainLayout;
