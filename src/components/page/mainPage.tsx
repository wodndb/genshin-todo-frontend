import React from 'react';
import TabButton from '../atom/TabButton';
import Todo from '../molecule/Todo';
import MainLayout from '../template/mainLayout';

const Tabs = (
  <>
    <TabButton>일일</TabButton>
    <TabButton>주간</TabButton>
    <TabButton>3주</TabButton>
    <TabButton>이벤트</TabButton>
  </>
);

const Body = (
  <>
    <Todo />
    <Todo />
    <Todo />
    <Todo />
  </>
);

const MainPage = () => {
  return <MainLayout tabs={Tabs} body={Body} />;
};

export default MainPage;
