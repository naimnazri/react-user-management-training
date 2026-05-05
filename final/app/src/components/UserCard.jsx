function UserCard({ user, onDelete, onView }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-md transition">
      <h2 className="font-semibold text-lg text-gray-800">{user.name}</h2>

      <p className="text-sm text-gray-500">{user.email}</p>

      <div className="mt-3 flex justify-between">
        <button className="text-blue-500 text-sm" onClick={() => onView(user)}>
          View
        </button>

        <button
          className="text-red-500 text-sm"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
