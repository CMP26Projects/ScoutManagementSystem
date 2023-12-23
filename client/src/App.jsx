// Theme file
import "./theme.scss";
// Global Style (includes normalize.css)
import "./assets/styles/global/global.scss";
// Import Routes
import Routes from "./routes";
// Import Store
import store from "./redux/store";
// Import Provider
import { Provider } from "react-redux";

function App() {
  return (
    <>
    <Provider store={store}>
      <Routes />
    </Provider>
    </>
  );
}

export default App;
