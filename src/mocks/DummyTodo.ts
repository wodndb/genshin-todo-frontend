export type TodoCategory = 'daily' | 'weekly' | 'halfVersion' | 'fullVersion';

export type Todo = {
  name: string;
};

export const GetTodo = (category: TodoCategory): Todo[] => {
  return dummyTodo[category];
};

const dummyTodo = {
  daily: [
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
  weekly: [
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
  halfVersion: [
    {
      name: '나선 비경',
    },
    {
      name: '체험 캐릭터',
    },
  ],
  fullVersion: [
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
};
