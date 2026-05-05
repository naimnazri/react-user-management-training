import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [adding, setAdding] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => setError("Failed to fetch data"))
      .finally(() => setLoading(false));
  }, []);

  const addUser = () => {
    if (!newUser.trim()) return;

    setAdding(true);

    if (newEmail && !newEmail.includes("@")) {
      alert("Please enter valid email");
      setAdding(false);
      return;
    }

    const user = {
      id: Date.now(),
      name: newUser.trim(),
      email: newEmail.trim() || "new@email.com",
      username: newUsername.trim() || "newuser",
    };

    setUsers([user, ...users]);
    setNewUser("");
    setNewEmail("");
    setNewUsername("");
    setSearch("");

    setAdding(false);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleView = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const filteredUsers = users.filter((user) =>
    user.name?.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg animate-pulse">Loading data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">User Management</h1>
        <div className="bg-white p-4 mb-4 rounded shadow flex flex-col gap-2">
          <div>
            <h2 className="text-lg font-semibold mb-1">Add New User</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <input
              autoFocus
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") addUser();
              }}
              placeholder="Enter new user name..."
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              value={newEmail}
              onChange={(e) => setNewEmail(e.target.value)}
              placeholder="Enter new user email..."
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
              placeholder="Enter new user username..."
              className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

            <button
              onClick={addUser}
              disabled={!newUser.trim() || adding}
              className={`px-4 py-2 text-white rounded transition 
            ${newUser.trim() && !adding ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}
          `}
            >
              {adding ? "Adding..." : "Add"}
            </button>
          </div>
        </div>
        <SearchBar setSearch={setSearch} />

        <div className="grid gap-4">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onDelete={handleDelete}
              onView={handleView}
            />
          ))}
          {filteredUsers.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No users found</p>
          )}
        </div>
      </div>
      {selectedUser && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center"
          role="dialog"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded shadow w-full max-w-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>

            <p className="text-gray-600">{selectedUser.email}</p>

            <p className="text-sm text-gray-500 mt-2">
              Username: {selectedUser.username || "-"}
            </p>

            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
