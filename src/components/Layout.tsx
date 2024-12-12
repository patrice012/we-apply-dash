import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { PropsWithChildren, useState } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {

    const [forceMobileStyle, setForceMobileStyle] = useState(false);

    const toggleForceMobileStyle = () => {
      setForceMobileStyle(!forceMobileStyle);
    };

  return (
    <div className="flex flex-col h-screen w-full ">
      <Navbar toggleForceMobileStyle={toggleForceMobileStyle} />
      <div className="flex w-full">
        <Sidebar forceMobileStyle={forceMobileStyle} />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
