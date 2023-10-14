import { createContext } from "react";
import { PartialUser, UserWithRestoreType } from "../types/global.types";

type UserContextType = {
  users: PartialUser[];
  setUsers: React.Dispatch<React.SetStateAction<PartialUser[]>>;
  removedUsers: PartialUser[];
  setRemovedUsers: React.Dispatch<React.SetStateAction<PartialUser[]>>;
  searchedUsers: UserWithRestoreType[];
  setSearchedUsers: React.Dispatch<React.SetStateAction<UserWithRestoreType[]>>;
};
const UserContext = createContext<UserContextType>({
  users: [],
  removedUsers: [],
  searchedUsers: [],
  setUsers: () => {},
  setRemovedUsers: () => {},
  setSearchedUsers: () => {}
});

export default UserContext;
