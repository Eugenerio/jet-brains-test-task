import React from "react";
import { GitHubIssue, GitHubComment } from "@/lib/types/github";

const IssueDetail: React.FC<{
  issue: GitHubIssue;
  comments: GitHubComment[];
}> = ({ issue, comments }) => (
  <div className="p-6 bg-white rounded shadow-md">
    <h2 className="text-2xl font-semibold">{issue.title}</h2>
    <p className="text-sm">Opened by {issue.user.login}</p>
    <p>{issue.body}</p>
    <h3 className="text-xl mt-6">Comments</h3>
    <ul>
      {comments.map((comment) => (
        <li key={comment.id} className="border-t pt-2">
          <p className="font-bold">{comment.user.login}</p>
          <p>{comment.body}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default IssueDetail;
