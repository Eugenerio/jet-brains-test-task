import React from "react";
import { GitHubIssue } from "@/lib/types/github";

const IssueList: React.FC<{ issues: GitHubIssue[] }> = ({ issues }) => (
  <ul>
    {issues && issues.length > 0 ? (
      issues.map((issue) => (
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
      ))
    ) : (
      <li>No issues available</li>
    )}
  </ul>
);

export default IssueList;
