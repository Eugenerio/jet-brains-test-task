import { useState } from "react";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    onSearch(input);
    setInput("");
  };

  return (
    <div className="flex mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search GitHub User"
        className="flex-1 p-2 rounded"
      />
      <button
        onClick={handleSearch}
        className="ml-2 p-2 bg-blue-500 text-white rounded"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBox;
