import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


const AddminLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <Sidebar/>
      <div className="col-span-10 h-[200vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AddminLayout;
