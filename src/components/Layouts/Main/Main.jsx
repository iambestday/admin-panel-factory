import "./Main.css";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="hero small__main large__main bg-base-200 rounded-lg shadow-md flex flex-col items-start p-5 ">
      
      <Outlet />
    </div>
  );
}

export default Main;
