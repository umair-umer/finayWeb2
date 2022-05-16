import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "../../Screens/profile/profile";
import Song from "../../Screens/song/song";
import HomeScreen from '../../Screens/Home';
import ExplorerScreen from '../../Screens/Explore';
import CommunityScreen from '../../Screens/Community';
import CreateScreen from '../../Screens/Create'
import TermsScreen from '../../Screens/Terms'
import SettingScreen from '../../Screens/Settings'
import LogoutScreen from '../../Screens/Logout'




function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/Explore" element={<ExplorerScreen />} />
      <Route path="/song" element={<Song />} />
      <Route path="/community" element={<CommunityScreen />} />
      <Route path="/create" element={<CreateScreen />} />
      <Route path="/terms" element={<TermsScreen />} />
      <Route path="/settings" element={<SettingScreen />} />
      <Route path="/logout" element={<LogoutScreen />} />
    </Routes>

  );
}
export default AppRouter;