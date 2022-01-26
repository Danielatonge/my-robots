import React from "react";

type Props = {
  searchfield: string;
  searchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ searchfield, searchChange }: Props) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
