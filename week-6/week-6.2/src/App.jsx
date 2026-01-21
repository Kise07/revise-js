import CallbackExample from "./components/EgUseCallback"
import DataFetcher from "./components/EgUseEffect"
import MemoExample from "./components/EgUseMemo"
import Counter from "./components/EgUseState"
import ComponentCleanup from "./components/ComponentCleanup"

function App() {
  return (
    <div>
      <div>Hi there!</div>
      <Counter />
      <DataFetcher />
      <MemoExample />
      <CallbackExample />
      <ComponentCleanup />
    </div>
  )
}

export default App
