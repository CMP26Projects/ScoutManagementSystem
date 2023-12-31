// routes.jsx is the main router for the application
// Will have the routes in it
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";

// Import modules/pages under this line
import LandingPage from "./components/landingpage/LandingPage";
import SignUp from "./components/signup/signUp";
import LogIn from "./components/login/logIn";

// Import layouts under this line
import PublicLayout from "./components/layout/PublicLayout";

// Import Testing Routes here
import TestTypo from "./components/testing/testTypo";
import TestLayout from "./components/testing/testLayout";
import Dashboard from "./components/dashboard/Dashboard";
import CaptainProfile from "./components/captain-profile/CaptainProfile";
import InsertTermPage from "./components/insert-term/InsertTermPage";
import UpdateTermPage from "./components/update-term-page/UpdateTermPage";
import InsertSector from "./components/insert-sector/InsertSector";
import AssignCaptainPage from "./components/assign-captain-page/AssignCaptainPage";
import InsertScoutPage from "./components/insert-scout/InsertScoutPage";
import UpdateScoutPage from "./components/update-scout/UpdateScoutPage";
import SendNotificationPage from "./components/send-notification/sendNotificationPage";
import NotificationsPage from "./components/notifications/notificationPage";
import ScoutsAttendance from "./components/scouts-attendance/ScoutsAttendance";
import MoneyPage from "./components/moneypage/MoneyPage";
import CaptainsAttendance from "./components/captains-attendance/CaptainAttendance";
import EditPassword from "./components/edit-password/EditPassword";
import CancelWeek from "./components/cancel-week/CancelWeek";

import ActivityPage from "./components/activitypage/ActivityPage";
import AddActivityPage from "./components/addactivitypage/AddActivityPage";
import StatsPage from "./components/stats-page/StatsPage";
function Routes() {
  return (
    <Router>
      <Switch>
        <Route element={<PublicLayout />}>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/signUp" element={<SignUp />} />
          <Route exact path="/logIn" element={<LogIn />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/profile" element={<CaptainProfile />} />
          <Route exact path="/start-new-term" element={<InsertTermPage />} />
          <Route exact path="/edit-term" element={<UpdateTermPage />} />
          <Route exact path="/add-sector" element={<InsertSector />} />
          <Route exact path="/assign-captain" element={<AssignCaptainPage />} />
          <Route exact path="/add-scout" element={<InsertScoutPage />} />
          <Route exact path="/update-scout" element={<UpdateScoutPage />} />
          <Route exact path="/cancel-week" element={<CancelWeek />} />
          <Route
            exact
            path="/send-notification"
            element={<SendNotificationPage />}
          />
          <Route exact path="/notifications" element={<NotificationsPage />} />
          <Route
            exact
            path="/record-scouts-absence"
            element={<ScoutsAttendance />}
          />
          <Route
            exact
            path="/record-captains-absence"
            element={<CaptainsAttendance />}
          />
          <Route exact path="/finance" element={<MoneyPage />} />
          <Route exact path="/edit-password" element={<EditPassword />} />
          <Route exact path="/activities" element={<ActivityPage />} />
          <Route exact path="/add-activity" element={<AddActivityPage />} />
          <Route exact path="/stats" element={<StatsPage />} />
        </Route>

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
