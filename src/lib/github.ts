const API_URL = "https://api.github.com";

export const fetchGitHubIssues = async (repo: string) => {
  const response = await fetch(`${API_URL}/repos/${repo}/issues`, {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    },
  });
  return response.json();
};
