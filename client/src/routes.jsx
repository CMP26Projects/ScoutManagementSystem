// routes.jsx is the main router for the application
// Will have the routes in it
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// Import modules/pages under this line

// Import Testing Routes here
import TestTypo from "./components/testing/testTypo";
import TestLayout from "./components/testing/testLayout";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" element={<h1>Landing</h1>} />

        {/* Testing Routes */}
        {/* FIXME: Delete test routes Later */}
        <Route path="/test/typo" element={<TestTypo />} />
        <Route path="/test/layout" element={<TestLayout />} />

        {/* Not Found */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default Routes;
