import { useContext } from "react";
import UserContext from "../context/User.context";

export default function useUserContext() {
  return useContext(UserContext);
}
