import React from 'react';
import styled from 'styled-components';

type TodoProps = {
  children?: React.ReactNode;
};

const Todo = ({children}: TodoProps) => {
  return <Root>{children}</Root>;
};

const Root = styled.div`
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background-color: white;
  color: black;
  text-align: center;
  vertical-align: middle;
`;

export default Todo;
