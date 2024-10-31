import { useState } from "react";

interface SearchBoxProps {
  onSearch: (searchTerm: string) => void;
  placeholder: string;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearch,
  placeholder,
  className = "",
}) => {
  const [input, setInput] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = () => {
    onSearch(input);
    setInput("");
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <div className={`flex mb-4 ${className}`}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        className={`flex-1 p-2 rounded text-black placeholder:text-black ${
          isFocused ? "border-blue-500" : "border-gray-300"
        }`}
        onBlur={handleBlur}
        onFocus={handleFocus}
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
