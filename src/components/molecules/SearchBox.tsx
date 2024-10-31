import { useState } from "react";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, placeholder }) => {
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
        placeholder={placeholder}
        className="flex-1 p-2 rounded text-black placeholder:text-black"
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
