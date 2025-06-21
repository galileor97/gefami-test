"use client";
import { Button } from "@heroui/button";
import { Image, Link } from "@heroui/react";
import React from "react";
import { useRouter } from "next/navigation";

export default function AppBar() {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center px-10 py-2 bg-gray-200">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={150} />
      </Link>
      <div className="flex gap-4">
        <Link href="/">Section 1</Link>
        <Link href="/section2">Section 2</Link>
        <Link href="/section3">Section 3</Link>
      </div>
      <div>
        <Button color="primary" onPress={() => router.push("/login")}>Login</Button>
      </div>
    </div>
  );
}
