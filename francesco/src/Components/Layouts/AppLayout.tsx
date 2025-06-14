import React, { useState } from "react";
import { Outlet } from "react-router-dom";

// Atoms
import Cursor from "../Atoms/Cursor/Cursor";

// Layout
import Topbar from "../Atoms/Topbar/Topbar";
import Sidebar from "../Atoms/Sidebar/Sidebar";

//Hooks
import { useLockBodyScroll } from "../../Hooks/useLockBodyScroll";

const AppLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useLockBodyScroll(isSidebarOpen);

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
