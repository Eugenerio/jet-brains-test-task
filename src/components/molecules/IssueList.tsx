import React from "react";
import { GitHubIssue } from "@/lib/types/github";

interface IssueListProps {
  issues: GitHubIssue[];
}

const IssueList: React.FC<IssueListProps> = ({ issues }) => {
  if (!issues || issues.length === 0) {
    return (
      <ul>
        <li>No issues available</li>
      </ul>
    );
  }

  return (
    <ul>
      {issues.map((issue) => (
        <li
          key={issue.id}
          className="p-4 text-black bg-white mb-2 rounded shadow-sm"
        >
          <h3 className="text-lg font-bold">{issue.title}</h3>
          <p className="text-sm">By {issue.user.login}</p>
          <p className="text-sm">
            Created on {new Date(issue.created_at).toLocaleDateString()}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default IssueList;
