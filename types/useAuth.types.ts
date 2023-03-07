interface AuthContext {
  IsUserLoggedIn: boolean;
  Logout: () => void;
}

type AuthProviderProps = {
  children: React.ReactNode;
};

export type { AuthContext, AuthProviderProps };
