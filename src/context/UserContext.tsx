import { createContext, useContext } from "react";

export enum UserRoles {
  ROLE_SUPER_ADMIN,
  ROLE_USER
}

export interface ICredentials {
  username: string;
  password: string;
}

export enum UserStatus {
  Under_validation,
  Validated,
  Blocked
}
export interface IUser {
  id: string;
  email: string;
  token?: string;
  isAuthenticated?: boolean;
  firstName?: string;
  lastName?: string;
  role?: UserRoles;
  status?: UserStatus;
  resetPasswordUniqueKey?: string;
  avatar?: string;
}
const defaultUser: IUser = {
  id: "",
  isAuthenticated: false,
  email: "",
  token: ""
};

export const UserContext = createContext({
  user: defaultUser,
  setUser: (user: IUser) => null,
  logoutUser: () => null
});

export function useUserContext() {
  return useContext(UserContext);
}
