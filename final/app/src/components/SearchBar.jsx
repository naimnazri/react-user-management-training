function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search user..."
      className="p-2 border rounded w-full mb-4"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
