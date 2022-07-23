import {gql} from '@apollo/client';

export type Todo = {
  name: string;
};

export type Todos = {
  id: number;
  category: string;
  todo: Todo[];
};

export type GetTodoQueryVar = {
  category: string;
};

export const GET_TODO_QUERY = gql`
  query GetTodos($category: String) {
    todos(type: $category) {
      id
      category
      todo {
        name
      }
    }
  }
`;
