function UserCard({ user }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-semibold">{user?.name}</h2>
      <p className="text-sm text-gray-500">{user?.email}</p>

      <div className="mt-2 flex justify-between">
        <button className="text-blue-500 text-sm">View</button>
        <button className="text-red-500 text-sm">Delete</button>
      </div>
    </div>
  );
}

export default UserCard;
