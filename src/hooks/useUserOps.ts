import { useCallback, useEffect } from "react";
import userList from "../data";
import { generateID, sortArr } from "../utils/global.utils";
import useUserContext from "./useUserContext";
import { PartialUser, User } from "../types/global.types";

export default function useUserOps() {
  const { users, setUsers, setRemovedUsers } = useUserContext();

  const handleRemove = useCallback(
    (userId: string) => {
      const user = users.find((u) => u.userId === userId) as PartialUser;
      setUsers((prevUsers) => prevUsers.filter((u) => u.userId !== userId));
      setRemovedUsers((prevUsers) => [...prevUsers, user]);
    },
    [users, setUsers, setRemovedUsers]
  );

  const loadUsers = useCallback(() => {
    const newUsers: PartialUser[] = (userList as User[])
      .filter((u) => u.age >= 18)
      .map(({ id, username, address, age, company }) => ({
        id,
        username,
        address,
        age,
        userId: generateID(),
        companyName: company.name
      }));
    setUsers(sortArr(newUsers, "age", "companyName"));
  }, [setUsers]);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return {
    users,
    handleRemove
  };
}
