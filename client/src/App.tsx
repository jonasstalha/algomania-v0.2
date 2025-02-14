import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/poppins"; // Import Poppins font globally
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import DataLiquidity from "./pages/DataLiquidity";
import SignalTradingLive from "./pages/SignalTradingLive";
import Calculators from "./pages/Calculators";
import Tools from "./pages/Tools";
import Learn from "./pages/Learn";
import EcoNews from "./pages/EcoNews";

// Landing Page Routes
import LandingPage from "./pages/Landingpage/Page";
import Login from "./pages/Landingpage/Login";
import Register from "./pages/Landingpage/Regester";
import VerificationSent from "./pages/Landingpage/VereficationSent";

// Profile pages and layout
import ProfileLayout from './pages/profille/ProfileLayout';
import Account from './pages/profille/Account';
import Security from './pages/profille/Security';
import Billing from './pages/profille/Billing';
import Notifications from './pages/profille/Notifications';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Independent Landing Page Routes */}
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verificationsent" element={<VerificationSent />} />

        {/* Dashboard Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="data-liquidity" element={<DataLiquidity />} />
          <Route path="signal-trading-live" element={<SignalTradingLive />} />
          <Route path="calculators" element={<Calculators />} />
          <Route path="tools" element={<Tools />} />
          <Route path="learn" element={<Learn />} />
          <Route path="eco-news" element={<EcoNews />} />

          {/* Nested Profile Routes */}
          <Route path="profile/*" element={<ProfileLayout />}>
            <Route path="account" element={<Account />} />
            <Route path="security" element={<Security />} />
            <Route path="billing" element={<Billing />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
