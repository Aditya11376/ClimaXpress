import {Outlet} from "react-router-dom"
import { Headers } from "../UI/Headers.jsx";
import { Footers } from "../UI/Footers.jsx";
export const AppLayout = () => {
  return(
    <>
    <Headers />
    <Outlet />
    <Footers />
    </>
  );
}
