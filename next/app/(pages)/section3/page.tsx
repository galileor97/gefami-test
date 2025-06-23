"use client";
import { Button, Input } from "@heroui/react";
import React, { useState } from "react";
import { addToast } from "@heroui/toast";
import { getTodayDate } from "../../utils/today-date";

export default function Section3() {
  const [name, setName] = useState("");
  const [hashedResult, setHashedResult] = useState("");

  const hashString = async (inputString: string) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(inputString);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
    return hashHex;
  };

  const handleHashNow = async () => {
    if (!name.trim()) {
      addToast({
        title: "Error",
        description: "Nama tidak boleh kosong!",
        color: "danger",
      });
      return;
    }

    const todayDate = getTodayDate();
    const stringToHash = `${todayDate}${name}pria${"ifabula"}`;

    console.log("String yang akan di-hash:", stringToHash);

    try {
      const hashedResult = await hashString(stringToHash);
      console.log("Hasil SHA256 Hash:", hashedResult);
      setHashedResult(hashedResult);
    } catch (error) {
      console.error("Error saat hashing:", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-10">
      <span className="text-sm text-gray-500">Question 7: SHA256 Hashing</span>
      <h1>Section 3</h1>
      {hashedResult && <p>Hasil Hash: {hashedResult}</p>}
      <Input
        label="Masukan Nama anda"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button color="primary" onPress={handleHashNow}>
        Hash Now
      </Button>
    </div>
  );
}
