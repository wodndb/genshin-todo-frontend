import TabButton from '../atom/TabButton';
import React from 'react';
import {TodoCategory} from '../../mocks/DummyTodo';

export type TabsProps = {
  onClick: (category: TodoCategory) => void;
};

const Tabs = ({onClick}: TabsProps) => {
  return (
    <>
      <TabButton onClick={() => onClick('daily')}>일일</TabButton>
      <TabButton onClick={() => onClick('weekly')}>주간</TabButton>
      <TabButton onClick={() => onClick('halfVersion')}>3주</TabButton>
      <TabButton onClick={() => onClick('fullVersion')}>버전</TabButton>
    </>
  );
};

export default Tabs;
