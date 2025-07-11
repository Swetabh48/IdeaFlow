"use client";

import Image from "next/image";
import {
    useOrganization,
    useOrganizationList,
} from "@clerk/nextjs";

import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const Item = ({
    id,
    name,
    imageUrl,
}: ItemProps) => {

    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();

    const isActive = organization?.id === id;

    const onClick = () => {
        if (!setActive) return;
        setActive({ organization: id });
    }

    return (
        // <div className="flex flex-col items-center">
            <div
                className="aspect-square relative">
                <Hint 
                    label={name}
                    side="right"
                    align="start"
                    sideOffset={18}    
                >
                <Image
                    fill
                    src={imageUrl}
                    alt={name}
                    onClick={onClick}
                    className={cn(
                        "rounded-md cursor-pointer opacity-75 hover:opacity-100 transition",
                        isActive && "opacity-100"
                    )}
                />
                </Hint>
            </div>
        //     <p className={cn(
        //         "text-xs mt-2 w-14 truncate text-center",
        //         isActive && "text-white"
        //     )}>
        //         {name}
        //     </p>
        // </div>
    )
}
