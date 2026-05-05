import { useState } from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  // TODO: Add state for users
  const [users, setUsers] = useState([
    { id: 1, name: "Sample User", email: "sample@email.com" },
  ]);

  // TODO: Add state for search
  const [search, setSearch] = useState("");

  // TODO: Add state for new user form

  // TODO: Fetch data from API using useEffect and axios
  // TODO: Update users state with API response

  // TODO: Implement add user function

  // TODO: Implement delete function

  // TODO: Implement view modal

  // TODO: Implement search filter using .filter()
  const filteredUsers = users;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>

      {/* Add User Section */}
      <div className="bg-white p-4 mb-4 rounded shadow flex flex-col gap-2">
        <h2 className="text-lg font-semibold">Add New User</h2>

        <div className="flex flex-col md:flex-row gap-2">
          <input
            placeholder="Enter new user name..."
            className="flex-1 p-2 border rounded"
          />
          <input
            placeholder="Enter new user email..."
            className="flex-1 p-2 border rounded"
          />
          <input
            placeholder="Enter new username..."
            className="flex-1 p-2 border rounded"
          />

          <button className="px-4 py-2 bg-blue-500 text-white rounded opacity-70">
            Add
          </button>
        </div>
      </div>

      {/* Search */}
      <SearchBar setSearch={setSearch} />

      {/* User List */}
      <div className="grid gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}

        {filteredUsers.length === 0 && (
          <p className="text-center text-gray-500">No users yet</p>
        )}
      </div>
    </div>
  );
}

export default App;
