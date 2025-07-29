"use client";

import { useClerk } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function InviteButton() {
  const { openOrganizationProfile } = useClerk();

  return (
    <Button variant="outline" onClick={() => openOrganizationProfile()}>
      <Plus className="h-4 w-4 mr-2" />
      Invite members
    </Button>
  );
}
