import React from "react";

interface CardListProps {
  data: {
    followers: number;
    following: number;
    public_repos: number;
  };
}

const CardList: React.FC<CardListProps> = ({ data }) => (
  <div className="grid grid-cols-3 gap-4 text-black">
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-bold">Followers</h3>
      <p className="text-xl">{data.followers}</p>
    </div>
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-bold">Following</h3>
      <p className="text-xl">{data.following}</p>
    </div>
    <div className="p-4 bg-white rounded shadow-md">
      <h3 className="text-lg font-bold">Public Repos</h3>
      <p className="text-xl">{data.public_repos}</p>
    </div>
  </div>
);

export default CardList;
