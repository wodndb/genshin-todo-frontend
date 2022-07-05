import {gql} from '@apollo/client';

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
