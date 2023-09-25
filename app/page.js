"use client";
import { useState } from "react";
import Image from "next/image";
import { invoke } from "@tauri-apps/api/tauri";
import { Input } from "@/components/ui/Input";

export default function Home() {
  const [searchkeyword, setSearchKeyword] = useState("");
  const [inputkeyword, setInputkeyword] = useState("search this ");
  async function greet(name) {
    setSearchKeyword(await invoke("greet", { name }));
  }
  return (
    <div>
      <Input
        type="text"
        placeholder="name"
        value={inputkeyword}
        onChange={(e) => {
          setInputkeyword(e.currentTarget.value);
          greet(e.currentTarget.value);
          console.log("hey", searchkeyword);
        }}
      />
      <h1>Home{}</h1>
      <p>{searchkeyword}</p>
    </div>
  );
}
