import React from "react";
import { GitHubDiscussion } from "@/lib/types/github";

const DiscussionList: React.FC<{ discussions: GitHubDiscussion[] }> = ({
  discussions,
}) => (
  <ul>
    {discussions && discussions.length > 0 ? (
      discussions.map((discussion) => (
        <li
          key={discussion.id}
          className="p-4 text-black bg-white mb-2 rounded shadow-sm"
        >
          <h3 className="text-lg font-bold">{discussion.title}</h3>
          <p className="text-sm">By {discussion.user.login}</p>
          <p className="text-sm">
            Created on {new Date(discussion.created_at).toLocaleDateString()}
          </p>
          <p>{discussion.body}</p>
        </li>
      ))
    ) : (
      <li>No discussions available</li>
    )}
  </ul>
);

export default DiscussionList;
