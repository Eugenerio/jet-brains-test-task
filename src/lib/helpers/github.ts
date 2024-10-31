import { GitHubDiscussion } from "../types/github";

const API_URL = "https://api.github.com";

export const fetchGitHubIssues = async (repo: string) => {
  const response = await fetch(`${API_URL}/repos/${repo}/issues`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  return response.json();
};

export const fetchGitHubDiscussions = async (
  repo: string
): Promise<GitHubDiscussion[]> => {
  const response = await fetch(
    `https://api.github.com/repos/${repo}/discussions`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
