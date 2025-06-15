import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Atoms
import Cursor from "../Atoms/Cursor/Cursor";

// Layout
import Topbar from "../Atoms/Topbar/Topbar";
import Sidebar from "../Atoms/Sidebar/Sidebar";

//Hooks
import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";
import { useDarkMode } from "../../Hooks/useDarkMode";

const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useLockBodyScroll(isSidebarOpen);

  const { forceRecheck } = useDarkMode();
  const location = useLocation();

  useEffect(() => {
    forceRecheck();
  }, [location, forceRecheck]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div className="layout">
      <Cursor />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
