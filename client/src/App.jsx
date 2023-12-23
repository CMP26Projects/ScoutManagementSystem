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
// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}

export default App;
