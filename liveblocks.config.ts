// Define Liveblocks types for your application
// https://liveblocks.io/docs/api-reference/liveblocks-react#Typing-your-data
import {
  createClient,
  LiveList,
  LiveMap,
  LiveObject,
} from "@liveblocks/client";
import {createLiveblocksContext, createRoomContext, CreateRoomContext} from "@liveblocks/react";
import { Layer,Color } from "@/types/canvas";

const client = createClient({
  // publicApiKey: process.env.NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY!,
  throttle:16,
  authEndpoint: "/api/liveblocks-auth",

});

declare global {
  interface Liveblocks {
    // Each user's Presence, for useMyPresence, useOthers, etc.
    Presence: {
      // Example, real-time cursor coordinates
      cursor: { x: number; y: number } | null;
      selection:string[];
      pencilDraft:[x:number,y:number,pressure:number][] | null;
      penColor:Color | null;
    };

    // The Storage tree for the room, for useMutation, useStorage, etc.
    Storage: {
      layers:LiveMap<string,LiveObject<Layer>>
      layerIds:LiveList<string>;
    };

    // Custom user info set when authenticating with a secret key
    UserMeta: {
      id?: string; // Optional, if you want to store the user ID
      info?:{
        name?:string;
        picture?:string;
      }
    };

    // Custom events, for useBroadcastEvent, useEventListener
    RoomEvent: {};
      // Example has two events, using a union
      // | { type: "PLAY" } 
      // | { type: "REACTION"; emoji: "🔥" };

    // Custom metadata set on threads, for useThreads, useCreateThread, etc.
    ThreadMetadata: {
      // Example, attaching coordinates to a thread
      // x: number;
      // y: number;
    };

    // Custom room info set with resolveRoomsInfo, for useRoomInfo
    RoomInfo: {
      // Example, rooms with a title and url
      // title: string;
      // url: string;
    };
  }
}


// Room-level hooks, use inside `RoomProvider`
export const {
    suspense: {
        RoomProvider,
        useRoom,
        useMyPresence,
        useUpdateMyPresence,
        useSelf,
        useOthers,
        useOthersMapped,
        useOthersListener,
        useOthersConnectionIds,
        useOther,
        useBroadcastEvent,
        useEventListener,
        useErrorListener,
        useStorage,
     
        useHistory,
        useUndo,
        useRedo,
        useCanUndo,
        useCanRedo,
        useMutation,
        useStatus,
        useLostConnectionListener,
        useThreads,
        useCreateThread,
        useEditThreadMetadata,
        useCreateComment,
        useEditComment,
        useDeleteComment,
        useAddReaction,
        useRemoveReaction,
        useThreadSubscription,
        useMarkThreadAsRead,
     

        // These hooks can be exported from either context
        // useUser,
        // useRoomInfo
    },
} = createRoomContext<Storage>(
    client
);

