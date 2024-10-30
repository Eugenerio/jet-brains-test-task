import React from "react";
import { GitHubIssue } from "@/lib/types/github";
import IssueList from "@/components/molecules/IssueList";
import { fetchGitHubIssues } from "@/lib/github";

const Page = async () => {
  try {
    const issues: GitHubIssue[] = await fetchGitHubIssues("facebook/react");

    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">GitHub Issues</h1>
        <IssueList issues={issues} />
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch issues:", error);
    return (
      <div>
        <h1 className="text-3xl font-bold mb-4">GitHub Issues</h1>
        <p>Error fetching issues. Please try again later.</p>
      </div>
    );
  }
};

export default Page;
