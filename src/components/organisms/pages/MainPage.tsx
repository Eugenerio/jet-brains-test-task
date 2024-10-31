"use client";
import { useState, useCallback, useEffect } from "react";
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
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const search = useCallback((searchTerm: string) => {
    if (searchTerm === "") {
      setError("Please enter a valid term");
      return;
    }
    setLoading(true);
    fetch(`https://api.github.com/users/${searchTerm}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("User not found");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">GitHub Stats</h1>

      <SearchBox onSearch={search} placeholder="Search GitHub user stats" />
      {loading ? (
        <p>Loading...</p>
      ) : data ? (
        <>
          <User src={data.avatar_url} username={data.login} />
          <CardList data={data} />
        </>
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
}
