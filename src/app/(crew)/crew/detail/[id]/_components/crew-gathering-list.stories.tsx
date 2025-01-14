import type { Meta, StoryObj } from '@storybook/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CrewGatheringList from './crew-gathering-list';

// 더미 데이터 정의
const mockGatheringData = [
  {
    id: 1,
    title: '요가 모임',
    dateTime: '2024-12-15T07:30',
    location: '서울, 한강공원',
    currentCount: 8,
    totalCount: 12,
    imageUrl:
      'https://images.unsplash.com/photo-1601758260892-a62c486ace97?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liked: true,
  },
  {
    id: 2,
    title: '등산 모임',
    dateTime: '2024-12-12T09:00',
    location: '서울 강남구 개포동 대모산',
    currentCount: 5,
    totalCount: 10,
    imageUrl:
      'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
    liked: false,
  },
  {
    id: 3,
    title: '러닝 모임',
    dateTime: '2024-12-15T09:00',
    location: '서울 영등포구 여의동로 330',
    currentCount: 10,
    totalCount: 20,
    imageUrl:
      'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
    liked: true,
  },
  {
    id: 4,
    title: '러닝 모임',
    dateTime: '2024-12-15T09:00',
    location: '서울 영등포구 여의동로 330',
    currentCount: 10,
    totalCount: 20,
    imageUrl:
      'https://images.unsplash.com/photo-1516978101789-720eacb59e79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGNhdHxlbnwwfHwwfHx8Mg%3D%3D',
    liked: true,
  },
];

const queryClient = new QueryClient();

const meta: Meta<typeof CrewGatheringList> = {
  title: 'crew/crew-gathering-list',
  component: CrewGatheringList,
  parameters: {
    docs: {
      subtitle: '크루 디테일 페이지 에서 볼 수 있는 약속 카드 리스트입니다.',
      description: {
        component: ' 데스크탑에서는 캐러셀, 이하의 사이즈에서는 드래그로 이동 가능합니다.',
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <div className="flex w-full justify-center bg-gray-100">
          <div className="relative -mx-6 w-[calc(100%+3rem)]">
            <Story />
          </div>
        </div>
      </QueryClientProvider>
    ),
  ],
} satisfies Meta<typeof CrewGatheringList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    gatheringData: mockGatheringData,
    crewId: 1,
  },
};
