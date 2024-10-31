"use client";
import { useState, useCallback } from "react";
import SearchBox from "@/components/molecules/SearchBox";
import User from "@/components/atoms/User";
import CardList from "@/components/molecules/CardList";

export type Data = {
  avatar_url: string;
  followers: number;
  following: number;
  login: string;
  public_repos: number;
};

export default function MainPage() {
  const [data, setData] = useState<Data | null>(null);

  const search = useCallback((searchTerm: string) => {
    if (searchTerm === "") {
      alert("Please enter a valid term");
      return;
    }
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => setData(data))
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="bg-none     min-h-screen p-4 mx-auto">
      <SearchBox onSearch={search} placeholder="Search GitHub user stats" />
      {data && (
        <>
          <User src={data.avatar_url} username={data.login} />
          <CardList data={data} />
        </>
      )}
    </div>
  );
}
