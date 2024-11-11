'use client';

import { useState } from 'react';
import { useGetCrewQuery } from '@/src/_queries/crew-queries';
import { useInfiniteScroll } from '@/src/hooks/useInfiniteScroll';
import CrewCardList from '@/src/components/common/crew-list/crew-card-list';
import Tabs from '@/src/components/common/tab';
import { CrewCardInformResponse } from '@/src/types/crew-card';

export default function MyCrewPage() {
  const myPageTabs = [
    { label: '내가 참여한 크루', id: 'joined-crew' },
    { label: '내가 만든 크루', id: 'made-crew' },
  ];
  const [currentTab, setCurrentTab] = useState(myPageTabs[0].id);

  // TODO: fetchCrewData 함수를 사용하여 데이터를 불러오기 : 파라미터 수정 필요
  const { data, ref, isFetchingNextPage } =
    useInfiniteScroll<CrewCardInformResponse>(useGetCrewQuery());

  return (
    <div className="py-8 md:py-12.5">
      <div className="px-3 md:px-8 lg:px-11.5">
        <Tabs
          variant="default"
          tabs={myPageTabs}
          activeTab={currentTab}
          onTabClick={(id) => {
            setCurrentTab(id);
          }}
        />
      </div>
      <div className="mt-8 px-3 md:px-8 lg:px-11.5">
        <CrewCardList
          inWhere="my-crew"
          data={data}
          ref={ref}
          isFetchingNextPage={isFetchingNextPage}
        />
      </div>
    </div>
  );
}