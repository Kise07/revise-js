import Memoization from './components/Memoization';
import { PushStateDown } from './components/PushStateDown';
import TodoApp from './components/KeysId';
import BlogPost from './components/BlogPost';
import DataFetcher from './components/DataFetcher';

function App() {
  return (
    <div>
      <div>Hi</div>
      <PushStateDown />
      <Memoization />
      <TodoApp />
      <BlogPost />
      <DataFetcher />
    </div>
  )
}

export default App;
