"use client";

import { useSearchParams } from "next/navigation";
import { EmptySearch } from "./empty-search";
import { EmptyFavorites } from "./empty-favorites";
import { EmptyBoards } from "./empty-boards";

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
    const data=[];  //TODO Change to API Call
    const params = useSearchParams();
    const favorites = params.get("favorites");
    const search = params.get("search");

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

}