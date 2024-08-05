import { IUser } from "../../../types/user";

interface UserCardProps {
  user: IUser;
}
export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="flex max-w-fit flex-col rounded-2xl bg-bg-secondary p-8">
      <h3 className="py-4">Username: {user.name}</h3>
      <p>ID: {user.id}</p>
      <p>Email: {user.email}</p>
      <p>Phone number: {user.phoneNumber}</p>
      <p>
        Role: <span className="lowercase">{user.role}</span>
      </p>
      <p>Email confirmed: {user.isEmailConfirmed ? "Yes" : "No"}</p>
      <p>
        Provider: <span className="lowercase">{user.provider}</span>{" "}
      </p>
    </div>
  );
}
