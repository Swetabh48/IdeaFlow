// app/board/[boardId]/page.tsx

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
  params: { boardId: string };
}

export default async function BoardIdPage({ params }: BoardIdPageProps) {
  // In Next.js 15+, `params` is a Promise that you properly await:
  const { boardId } = await Promise.resolve(params); // or await params
  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
}


/*"use client";

import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoardIdPageProps {
    params: { boardId: string };
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {


    return (
        <Room roomId={params.boardId} fallback={<Loading />}>
            <Canvas boardId={params.boardId} />
        </Room>
    );
};

export default BoardIdPage;*/