"use client";
import { useState, useCallback, useEffect } from "react";
import { GetServerSideProps } from "next";
import { fetchGitHubIssues } from "@/lib/helpers/github";
import IssueList from "@/components/molecules/IssueList";
import { GitHubIssue } from "@/lib/types/github";
import SearchBox from "@/components/molecules/SearchBox";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const issues = await fetchGitHubIssues("facebook/react");
    return { props: { initialIssues: issues } };
  } catch (error) {
    console.error("Failed to fetch issues:", error);
    return { props: { initialIssues: [] } };
  }
};

const Issues: React.FC<{ initialIssues?: GitHubIssue[] }> = ({
  initialIssues,
}) => {
  const [issues, setIssues] = useState<GitHubIssue[]>(initialIssues || []);
  const [loading, setLoading] = useState(false);
  const [searchTerm] = useState("");

  const handleSearch = useCallback(async () => {
    if (!searchTerm) {
      alert("Please enter a valid project name");
      return;
    }

    setLoading(true);
    try {
      const fetchedIssues = await fetchGitHubIssues(searchTerm);
      setIssues(fetchedIssues);
    } catch (error) {
      alert("Failed to fetch issues. Please check the project name.");
      console.error("Error fetching issues:", error);
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">GitHub Issues</h1>
      <SearchBox
        onSearch={handleSearch}
        placeholder="Search GitHub user/project issues"
      />
      {loading ? <p>Loading issues...</p> : <IssueList issues={issues} />}
    </div>
  );
};

export default Issues;
