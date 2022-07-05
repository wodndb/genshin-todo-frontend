import {GET_TODO_QUERY} from './TodoQuery';

export const mocks = [
  {
    request: {
      query: GET_TODO_QUERY,
      variables: {
        category: 'Daily',
      },
    },
    result: {
      data: {
        todos: {
          id: 1,
          category: 'Daily',
          todo: [
            {
              name: '일일 퀘스트',
            },
            {
              name: '심부름',
            },
            {
              name: '레진',
            },
            {
              name: '속세의 주전자',
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_TODO_QUERY,
      variables: {
        category: 'Weekly',
      },
    },
    result: {
      data: {
        todos: {
          id: 2,
          category: 'Weekly',
          todo: [
            {
              name: '평판 퀘스트',
            },
            {
              name: '평판 우두머리',
            },
            {
              name: '쓰레기 재활용',
            },
            {
              name: '주간 우두머리',
            },
            {
              name: '진주 기행 1만 포인트',
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_TODO_QUERY,
      variables: {
        category: 'HalfVersion',
      },
    },
    result: {
      data: {
        todos: {
          id: 3,
          category: 'HalfVersion',
          todo: [
            {
              name: '나선 비경',
            },
            {
              name: '체험 캐릭터',
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: GET_TODO_QUERY,
      variables: {
        category: 'Version',
      },
    },
    result: {
      data: {
        todos: {
          id: 4,
          category: 'Version',
          todo: [
            {
              name: '이벤트 1',
            },
            {
              name: '이벤트 2',
            },
            {
              name: '이벤트 3',
            },
            {
              name: '이벤트 4',
            },
          ],
        },
      },
    },
  },
];
