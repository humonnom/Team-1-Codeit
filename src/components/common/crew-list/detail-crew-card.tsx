'use client';

import Image from 'next/image';
import { Menu } from '@mantine/core';
import Profiles from '@/src/components/common/crew-list/profiles';
import ProgressBar from '@/src/components/common/progress-bar/index';
import Check from '@/public/assets/icons/ic-check.svg';
import KebabIcon from '@/public/assets/icons/kebab-btn.svg';

interface DetailCrewCardProps {
  id: number;
  title: string;
  mainLocation: string;
  subLocation: string;
  participantCount: number;
  totalCount: number;
  isConfirmed: boolean;
  imageUrl: string;
  totalGatheringCount: number;
  CrewMemberList: CrewMember[];
  isCaptain: boolean;
  isCrew: boolean;
}

interface CrewMember {
  id: number;
  nickname: string;
  imageUrl?: string | null;
}

export default function DetailCrewCard({
  id,
  title,
  mainLocation,
  subLocation,
  participantCount,
  totalCount,
  isConfirmed,
  imageUrl,
  totalGatheringCount,
  CrewMemberList,
  isCaptain,
  isCrew,
}: DetailCrewCardProps) {
  const handleDelete = () => {
    // 삭제 로직
  };

  const handleLeaveCrew = () => {
    // 탈퇴 로직
  };

  return (
    <div className="relative mx-[16px] flex h-[508px] max-w-full flex-col overflow-hidden rounded-[14px] bg-white shadow-bg md:mx-[32px] md:h-[270px] md:flex-row lg:mx-auto lg:h-[270px] lg:w-[1180px]">
      {/* eslint-disable-next-line no-nested-ternary */}
      {isCaptain ? (
        <Menu trigger="click" position="bottom-end" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <div className="top-68 absolute right-6 top-[286px] cursor-pointer md:top-6 lg:top-6">
              <Image src={KebabIcon} alt="더보기" width={20} height={20} />
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item component="a" href="" className="font-pretendard">
              크루 수정하기
            </Menu.Item>
            <Menu.Item
              type="button"
              onClick={handleDelete}
              className="font-pretendard text-red-600"
            >
              크루 삭제하기
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : isCrew ? (
        <Menu trigger="click" position="bottom-end" openDelay={100} closeDelay={400}>
          <Menu.Target>
            <div className="top-68 absolute right-6 top-[286px] md:top-6 lg:top-6">
              <Image src={KebabIcon} alt="더보기" width={20} height={20} />
            </div>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item type="button" onClick={handleLeaveCrew} className="font-pretendard">
              크루 탈퇴하기
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : null}

      {/* 썸네일 */}
      <div className="relative h-[270px] w-full md:w-[385px] lg:w-[540px]">
        <Image fill objectFit="cover" alt={title} src={imageUrl} />
      </div>

      <div className="flex w-full flex-col justify-between p-6 sm:h-[238px] sm:px-4 sm:pt-4 md:h-[270px] md:flex-1 lg:h-[270px]">
        {/* 메인 내용 */}
        <div>
          <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
            <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap pr-6 text-lg font-semibold lg:pr-0">
              {title}
            </span>
            <span className="hidden lg:ml-2 lg:inline-block">|</span>
            <span className="text-base font-medium">
              {mainLocation} {subLocation}
            </span>
          </div>

          <span className="text-sm font-semibold text-blue-600">
            {`현재 ${totalGatheringCount}개의 약속이 개설되어 있습니다.`}
          </span>
        </div>
        {/* 세부내용 */}
        <div className="flex w-full gap-8 border-t-[2px] border-t-gray-200 pt-[31px]">
          <div className="flex flex-grow flex-col items-start gap-2">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">모집 정원</span>
                <span className="text-sm font-semibold">{participantCount}명</span>
                <div className="pl-2">
                  <Profiles profiles={CrewMemberList} />
                </div>
              </div>

              {isConfirmed && (
                <span className="flex items-center gap-[1px] text-blue-600">
                  <Image src={Check} alt="확인" width={24} height={24} />{' '}
                  <span className="text-sm font-medium"> 개설 확정</span>
                </span>
              )}
            </div>
            <ProgressBar total={totalCount} current={participantCount} />
            <div className="flex w-full justify-between">
              <span className="text-sm font-medium text-gray-700">최소인원 2명</span>
              <span className="text-sm font-medium text-gray-700">최대인원 {totalCount}명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
