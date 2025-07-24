// app/board/[boardId]/page.tsx
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

export default async function BoardIdPage({ params }: { params: Promise<{ boardId: string }> }) {
  const { boardId } = await params;

  return (
    <Room roomId={boardId} fallback={<Loading />}>
      <Canvas boardId={boardId} />
    </Room>
  );
}
