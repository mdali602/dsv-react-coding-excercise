import React, { useState } from "react";
import { PartialUser, UserWithRestoreType } from "../types/global.types";
import UserContext from "./User.context";

type UserContextProviderProps = {
  children: React.ReactNode;
};
export default function UserContextProvider(props: UserContextProviderProps) {
  const [users, setUsers] = useState<PartialUser[]>([]);
  const [removedUsers, setRemovedUsers] = useState<PartialUser[]>([]);

  const [searchedUsers, setSearchedUsers] = useState<UserWithRestoreType[]>([]);
  return (
    <UserContext.Provider
      value={{
        users,
        removedUsers,
        searchedUsers,
        setUsers,
        setRemovedUsers,
        setSearchedUsers
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
