"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function InviteButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="h-4 w-4 mr-2" />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
        <DialogTitle asChild>
          <VisuallyHidden>Invite Members</VisuallyHidden>
        </DialogTitle>
        <OrganizationProfile />
      </DialogContent>
    </Dialog>
  );
}
