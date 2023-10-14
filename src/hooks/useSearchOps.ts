import { ChangeEvent, useCallback } from "react";
import { PartialUser, User } from "../types/global.types";
import userList from "../data";
import {
  findSubStr,
  generateID,
  intersection,
  pickObjectKeys,
  sortArr,
} from "../utils/global.utils";
import useUserContext from "./useUserContext";

export default function useUserOps() {
  const {
    setUsers,
    removedUsers,
    setRemovedUsers,
    searchedUsers,
    setSearchedUsers,
  } = useUserContext();

  const handleSearch = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      if (!value) {
        setSearchedUsers([]);
        return;
      }
      const newUsers = findSubStr(userList, "username", value) as User[];
      const newUsersWithRestore = intersection(newUsers, removedUsers, "id");
      console.log({ newUsers });
      setSearchedUsers(newUsersWithRestore);
    },
    [removedUsers, setSearchedUsers]
  );

  const handleRestore = useCallback(
    (id: number) => {
      const newRemovedUsers = removedUsers.filter((u) => u.id !== id);
      const userObj = pickObjectKeys(
        userList.find((u) => u.id === id) as User,
        ["id", "username", "address", "age", "company"]
      ) as User;
      
      const newUser = {
        ...userObj,
        userId: generateID(),
        companyName: userObj.company.name,
      } as PartialUser;
      console.log({ newUser, newRemovedUsers });
      setRemovedUsers(newRemovedUsers);
      setSearchedUsers((prevUsers) =>
        intersection(prevUsers, newRemovedUsers, "id")
      );
      setUsers((prevUsers) =>
        sortArr([...prevUsers, { ...newUser }], "age", "companyName")
      );
    },
    [removedUsers, setRemovedUsers, setSearchedUsers, setUsers]
  );

  return {
    searchedUsers,
    handleSearch,
    handleRestore,
  };
}
