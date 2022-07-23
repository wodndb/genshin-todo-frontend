import React, {useState} from 'react';
import {TodoCategory} from '../../mocks/DummyTodo';
import Tabs from '../organism/Tabs';
import TodoList from '../organism/TodoList';
import MainLayout from '../template/mainLayout';

const MainPage = () => {
  const [category, setCategory] = useState<TodoCategory>('daily');
  const handlingTabClick = (category: TodoCategory) => {
    setCategory(category);
  };

  return (
    <MainLayout
      tabs={<Tabs onClick={handlingTabClick} />}
      body={<TodoList category={category} />}
    />
  );
};

export default MainPage;
