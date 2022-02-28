import { Link, Route, Routes } from 'solid-app-router';
import { Component } from "solid-js";
import Home from "./pages/Home";
import Settings from "./pages/Settings";


const App: Component = () => {
  return (
    <div>
      <header>
        <Link href="/">
          Home
        </Link>
        <Link href="/settings">
          Settings
        </Link>
      </header>
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
