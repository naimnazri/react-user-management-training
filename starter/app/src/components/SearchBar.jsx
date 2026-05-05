function SearchBar({ setSearch }) {
  return (
    <input
      placeholder="Search user..."
      className="w-full p-2 border rounded mb-4"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default SearchBar;
