"use client";
import { useState, useCallback } from "react";
import { GetServerSideProps } from "next";
import { fetchGitHubDiscussions } from "@/lib/helpers/github";
import DiscussionList from "@/components/molecules/DiscussionList";
import { GitHubDiscussion } from "@/lib/types/github";
import SearchBox from "@/components/molecules/SearchBox";

// Fetching discussions on the server-side
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const discussions = await fetchGitHubDiscussions("facebook/react");
    return { props: { initialDiscussions: discussions } };
  } catch (error) {
    console.error("Failed to fetch discussions:", error);
    return { props: { initialDiscussions: [] } };
  }
};

const Discussions: React.FC<{ initialDiscussions?: GitHubDiscussion[] }> = ({
  initialDiscussions,
}) => {
  const [discussions, setDiscussions] = useState<GitHubDiscussion[]>(
    initialDiscussions || []
  );
  const [loading, setLoading] = useState(false);

  const handleSearch = useCallback(async (searchTerm: string) => {
    if (!searchTerm) {
      alert("Please enter a valid project name");
      return;
    }

    setLoading(true);
    try {
      const fetchedDiscussions = await fetchGitHubDiscussions(searchTerm);
      setDiscussions(fetchedDiscussions);
    } catch (error) {
      alert("Failed to fetch discussions. Please check the project name.");
      console.error("Error fetching discussions:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">GitHub Discussions</h1>
      <SearchBox
        onSearch={handleSearch}
        placeholder="Search GitHub discussions"
      />
      {loading ? (
        <p>Loading discussions...</p>
      ) : (
        <DiscussionList discussions={discussions} />
      )}
    </div>
  );
};

export default Discussions;
