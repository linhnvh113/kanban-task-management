'use client';

import React from 'react';

import { useQuery } from '@tanstack/react-query';

import ModeToggle from '@/components/mode-toggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { getAllBoards } from '@/server/actions';

import NavigationAction from '../navigation/navigation-action';
import NavigationItem from '../navigation/navigation-item';

interface Props {
  children: React.ReactNode;
}

export default function HeaderDropdown({ children }: Props) {
  const { data } = useQuery({
    queryKey: ['boards'],
    queryFn: getAllBoards,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-64 px-0 py-4"
        align="start"
        sideOffset={32}
      >
        <DropdownMenuLabel className="px-6 pb-4 pt-0">
          {`ALL BOARDS (${data?.length})`}
        </DropdownMenuLabel>
        <DropdownMenuGroup className="pr-6">
          {data?.map((board) => (
            <NavigationItem key={board.id} board={board} />
          ))}
          <NavigationAction />
        </DropdownMenuGroup>
        <DropdownMenuGroup className="px-4">
          <ModeToggle />
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
