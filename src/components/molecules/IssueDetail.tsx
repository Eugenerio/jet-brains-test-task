import React from "react";
import { GitHubIssue, GitHubComment } from "@/lib/types/github";

interface IssueDetailProps {
  issue: GitHubIssue;
  comments: GitHubComment[];
}

const IssueDetail: React.FC<IssueDetailProps> = ({ issue, comments }) => {
  const handleCommentRender = (comment: GitHubComment) => (
    <li key={comment.id} className="border-t pt-2">
      <p className="font-bold">{comment.user.login}</p>
      <p>{comment.body}</p>
    </li>
  );

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold">{issue.title}</h2>
      <p className="text-sm">Opened by {issue.user.login}</p>
      <p>{issue.body}</p>
      <h3 className="text-xl mt-6">Comments</h3>
      <ul>{comments.map(handleCommentRender)}</ul>
    </div>
  );
};

export default IssueDetail;
