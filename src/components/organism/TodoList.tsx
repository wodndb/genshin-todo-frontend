import React from 'react';
import Todo from '../molecule/Todo';
import {GetTodo, TodoCategory} from '../../mocks/DummyTodo';

type TodoListProps = {
  category: TodoCategory;
};

const TodoList = ({category}: TodoListProps) => {
  const todo = GetTodo(category);

  return (
    <>
      {todo.map((todo, idx) => (
        <Todo key={idx}>{todo.name}</Todo>
      ))}
    </>
  );
};

export default TodoList;
