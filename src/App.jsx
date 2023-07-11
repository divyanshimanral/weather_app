import "./App.css";
import Search from "./container/Search";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/invalidCityName";

function App() {
  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => window.location.reload()}
    >
      <div className="wrapper">
        <Search />
      </div>
    </ErrorBoundary>
  );
}

export default App;
