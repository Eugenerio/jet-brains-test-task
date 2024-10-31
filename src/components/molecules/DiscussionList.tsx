import React from "react";
import { GitHubDiscussion } from "@/lib/types/github";

interface DiscussionListProps {
  discussions: GitHubDiscussion[];
}

const DiscussionList: React.FC<DiscussionListProps> = ({ discussions }) => {
  if (!discussions || discussions.length === 0) {
    return (
      <ul>
        <li>No discussions available</li>
      </ul>
    );
  }

  return (
    <ul>
      {discussions.map((discussion) => (
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
      ))}
    </ul>
  );
};

export default DiscussionList;
