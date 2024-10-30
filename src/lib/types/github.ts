export interface GitHubIssue {
  body: string;
  id: number;
  title: string;
  user: { login: string };
  state: string;
  created_at: string;
}

export interface GitHubComment {
  id: number;
  body: string;
  user: { login: string };
  created_at: string;
}
