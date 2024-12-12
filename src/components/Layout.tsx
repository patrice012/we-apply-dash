import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col h-screen w-full ">
      <Navbar />
      <div className="flex w-full">
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
