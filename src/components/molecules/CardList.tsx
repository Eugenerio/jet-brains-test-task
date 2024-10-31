import React from "react";
import { Card } from "../atoms/Card";

interface CardListProps {
  data: {
    followers: number;
    following: number;
    public_repos: number;
  };
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  const { followers, following, public_repos } = data;

  return (
    <div className="grid grid-cols-3 gap-4 text-black">
      <Card title="Followers" value={followers} />
      <Card title="Following" value={following} />
      <Card title="Public Repos" value={public_repos} />
    </div>
  );
};

export default CardList;
