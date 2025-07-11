"use client";

import { useQuery } from "convex/react";
import {api} from "@/convex/_generated/api";
import { useSearchParams } from "next/navigation";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";
import { BoardCard } from "./board-card";
import { NewBoardButton } from "./new-board-button";

interface BoardListProps{
    orgId:string,
    query:{
        search?:string;
        favorites?:string;
    };
};

export const BoardList=({
    orgId,
    query,
}: BoardListProps)=>{
    const params = useSearchParams();
    const favorites = params.get("favorites");
    const search = params.get("search");

    query.favorites = favorites ? favorites : "";
    query.search = search ? search : "";

    const data = useQuery(api.boards.get, {
        orgId
    });
    if(data===undefined){
        return(
            <div>
                <h2 className="text-3xl">
                    {query.favorites? "Favorite boards":"Team boards"}
                </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId} disabled/>
                <BoardCard.Skeleton/>
            </div>
            </div>
        )
    }


    query.favorites = favorites ? favorites : "";
    query.search = search ? search : "";

    if(!data?.length&&search){
        return <EmptySearch/>
    }

    if(!data?.length &&favorites){
        return <EmptyFavorites/>
    }

    if(!data?.length){
        return  <EmptyBoards/>
    }
    return (
        <div>
            <h2 className="text-3xl">
                {query.favorites? "Favorite boards":"Team boards"}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 mt-8 pb-10">
                <NewBoardButton orgId={orgId}/>
                {data?.map((board)=>(
                    <BoardCard
                        key={board._id}
                        id={board._id}
                        title={board.title}
                        imageUrl={board.imageUrl}
                        authorId={board.authorId}
                        authorName={board.authorName}
                        createdAt={board._creationTime}
                        orgId={board.orgId}
                        isFavorite={false}
                    />
                    ))}
            </div>
        </div>
    );
};