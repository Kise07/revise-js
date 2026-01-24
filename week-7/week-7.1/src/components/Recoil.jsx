// Atom creation
import { atom } from "recoil";

export const userState = atom({
  key: 'userState',
  default: { name: 'John' },
});

// Accessing recoil state in a component
function Profile() {
  const [user, setUser] = useRecoilState(userState);

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => setUser({ name: 'Jane' })}>Change Name</button>
    </div>
  );
};
