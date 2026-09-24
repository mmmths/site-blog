type UserLIsitProps = {
  id: number;
  name: string;
};

async function feathUsers(): Promise<UserLIsitProps[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Alice" },
        { id: 2, name: "joao" },
        { id: 3, name: "matheus" }
      ]);
    }, 2000);
  });
}

async function UserList() {
  const userList = await feathUsers();
  return (
    <div className="mt-20 text-white">
      {userList.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default function UserLisPage() {
  return (
    <>
      <h2>User LIst</h2>
      <UserList />
    </>
  );
}
