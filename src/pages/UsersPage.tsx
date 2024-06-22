import { User } from "../lib/model/user";
import { useUsers } from "../hooks/useUser";

const UserWidget = ({ user }: { user: User }) => {
  return (
    <div className="grid grid-cols-5 items-center p-[1rem] hover:bg-gray-200 text-center">
      <p className="text-left">{user.name}</p>
      <p>{user.email}</p>
      <p>{user.points}</p>
      <p>{user.avatar}</p>
      <p>{user.uid}</p>
    </div>
  );
};

const UsersPage = () => {
  const { error, users } = useUsers();

  if (!users)
    return <div>{error && <p className="text-red-500">{error}</p>}Loading</div>;

  return (
    <div className="">
      <h1 className="font-bold text-[32px]">Users</h1>
      <hr />
      <div className="flex flex-col py-[1rem] gap-[1rem]">
        <div className="grid grid-cols-5 items-center p-[1rem] text-center">
          <p className="text-left">Name</p>
          <p>email</p>
          <p>points</p>
          <p>avatar</p>
          <p>uid</p>
        </div>
        <hr />
        {users.map((user, key) => (
          <UserWidget user={user} key={key} />
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
