"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
      <ToastProvider />
    </HeroUIProvider>
  );
}
