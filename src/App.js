

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./config/Router/router";
import './App.css'
function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
