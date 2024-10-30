import { GetServerSideProps } from "next";
import { fetchGitHubIssues } from "@/lib/github";
import IssueList from "@/components/molecules/IssueList";
import { GitHubIssue } from "@/lib/types/github";

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const issues = await fetchGitHubIssues("facebook/react");
    return { props: { issues } };
  } catch (error) {
    console.error("Failed to fetch issues:", error);
    return { props: { issues: [] } };
  }
};

const Issues: React.FC<{ issues: GitHubIssue[] }> = ({ issues }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">GitHub Issues</h1>
      <IssueList issues={issues} />
    </div>
  );
};

export default Issues;
