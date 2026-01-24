// Context creation
import { createContext } from "react";

const UserContext = createContext();

// Context provider
function UserProvider({ children }) {
  const user = { name: 'John' };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

// Accessing context in a component
function Profile() {
  const user = useContext(UserContext);

  return <p>Welcome, {user.name}</p>;
}
