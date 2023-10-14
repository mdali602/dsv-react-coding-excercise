import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import UserCard from "./UserCard";
import useUserOps from "../../hooks/useUserOps";

export default function Users() {
  const { users, handleRemove } = useUserOps();
  return (
    <>
      <Typography variant="h6" component="h6" sx={{ my: 2 }}>
        LIst of Users:
      </Typography>
      <Divider />
      {users.map((user) => (
        <UserCard key={user.id} user={user} handleRemove={handleRemove} />
      ))}
    </>
  );
}
