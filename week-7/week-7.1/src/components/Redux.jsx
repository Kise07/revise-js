import { createStore } from "redux";

const initialState = { user: { name: 'John' } };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, user: { name: 'Jane' } };
    default:
      return state;
  };
};

const store = createStore(rootReducer);

// Accessing Redux state in a component
function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button onClick={() => dispatch({ type: 'CHANGE_NAME' })}>Change Name</button>
    </div>
  );
};
