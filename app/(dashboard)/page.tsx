"use client";

import { use } from "react";
import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";

export default function DashboardPage({ searchParams }: { searchParams: Promise<{ [key: string]: string }> }) {
  const { organization } = useOrganization();
  const query = use(searchParams);

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-5">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={query} />
      )}
    </div>
  );
}
