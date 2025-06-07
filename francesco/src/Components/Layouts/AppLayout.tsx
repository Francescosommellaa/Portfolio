import React, { useState } from "react";

//  Atoms
import Cursor from "../Atoms/Cursor/Cursor";

// Layout
import Topbar from "../Organisms/Topbar/Topbar";
import Sidebar from "../Organisms/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="layout">
      <Cursor />
      <Topbar
        isSidebarOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
