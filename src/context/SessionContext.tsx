/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, createContext, type PropsWithChildren } from "react";
import { useStorageState } from "../hooks/useStorageHook";

const AuthContext = createContext<{
  session?: string | null;
  isLoading: boolean;
  setSession: any;
  setLoginData: any;
  loginData: any;
}>({
  session: null,
  isLoading: false,
  setSession: null,
  setLoginData: null,
  loginData: null,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [[iLoading, loginData], setLoginData] = useStorageState("userData");

  return (
    <AuthContext.Provider
      value={{
        setSession,
        session,
        isLoading,
        setLoginData,
        loginData,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
