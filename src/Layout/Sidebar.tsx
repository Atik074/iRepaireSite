import { cn } from "@/lib/utils";
import { Layers2, LayoutDashboard, PlusCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-light-gray col-span-2 h-screen overflow-auto sticky top-0 left-0 px-5 py-4">
      <nav className="flex flex-col">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            cn(
              "hover:bg-dark-gray hover:text-white px-3 py-2 text-lg rounded-md transition-all flex items-center mb-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <LayoutDashboard />
          <span className="truncate ml-1"> Dashboard</span>
        </NavLink>
        <NavLink
          to="service-list"
          className={({ isActive }) =>
            cn(
              "hover:bg-dark-gray hover:text-white px-3 py-2 text-lg rounded-md transition-all flex items-center mb-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <Layers2/>
          <span className="truncate ml-1"> Service List</span>
        </NavLink>
        <NavLink
          to="add-service"
          className={({ isActive }) =>
            cn(
              "hover:bg-dark-gray hover:text-white px-3 py-2 text-lg rounded-md transition-all flex items-center mb-2",
              {
                "bg-dark-gray text-white": isActive,
              }
            )
          }
        >
          <PlusCircle/>
          <span className="truncate ml-1">Add Service</span>
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
