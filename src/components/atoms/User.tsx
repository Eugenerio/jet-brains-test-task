import Image from "next/image";
import React from "react";

interface UserProps {
  src: string;
  username: string;
}

const User: React.FC<UserProps> = ({ src, username }) => {
  return (
    <div className="flex items-center mb-4 p-4 bg-white rounded shadow-md">
      <Image
        src={src}
        alt={username}
        width={60}
        height={60}
        className="rounded-full mr-4 object-cover"
      />
      <div>
        <h2 className="text-lg font-bold text-black">{username}</h2>
      </div>
    </div>
  );
};

export default User;
