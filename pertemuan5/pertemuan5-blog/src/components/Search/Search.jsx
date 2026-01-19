import { useState } from "react";

const Search = ({ totalPost, onSearchChange }) => {
  const [search, setSearch] = useState("");

  const handleChangeSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
   
    onSearchChange(value);
  };

  return (
    <div>
      Cari artikel : <input type="text" onChange={handleChangeSearch} />
      <br />
      <small>
        Ditemukan <b>{totalPost}</b> data dengan pencarian kata
        <b>{search}</b>
      </small>
    </div>
  );
};

export default Search;
