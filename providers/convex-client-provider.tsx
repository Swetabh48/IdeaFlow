"use client";

import { ClerkProvider, SignIn } from "@clerk/nextjs";
import { useAuth } from "@clerk/nextjs";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { AuthLoading, Authenticated, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider>
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>
          {children}
        </Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
        <SignedOutFallback />
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

const SignedOutFallback = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn routing="hash" />
    </div>
  );
};
