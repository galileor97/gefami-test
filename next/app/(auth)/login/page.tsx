"use client";
import React from "react";
import { Form, Input, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
export default function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");

  React.useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    
    if (storedUsername && storedPassword) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const usernameValue = formData.get("username") as string;
    const passwordValue = formData.get("password") as string;

    if (usernameValue && passwordValue) {
      localStorage.setItem("username", usernameValue);
      localStorage.setItem("password", passwordValue);
      
      setIsLoggedIn(true);
      setUsername(usernameValue);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    
    setIsLoggedIn(false);
    setUsername("");
  };


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs flex flex-col gap-4 bg-white p-4 rounded-lg items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={200} height={200} />
        </Link>
        {!isLoggedIn ? (
          <Form
            className="w-full flex flex-col gap-4"
            onSubmit={handleLogin}
          >
            <Input
              isRequired
              errorMessage="Please enter a valid username"
              label="Username"
              labelPlacement="outside"
              name="username"
              placeholder="Enter your username"
              type="text"
            />

            <Input
              isRequired
              errorMessage="Please enter a valid password"
              label="Password"
              labelPlacement="outside"
              name="password"
              placeholder="Enter your password"
              type="password"
            />
            
            <div className="flex gap-2">
              <Button color="primary" type="submit">
                Login
              </Button>
            </div>
          </Form>
        ) : (
          <div className="flex flex-col gap-4 text-center">
            <div className="text-large font-semibold text-primary">
              Selamat datang, {username}!
            </div>
            <Button color="danger" variant="flat" onPress={handleLogout}>
              Logout
            </Button>
          </div>
        )}

      </div>
    </div>
  );
}
