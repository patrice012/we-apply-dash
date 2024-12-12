import { HambergerMenu, Notification } from "iconsax-react";

export default function Navbar({toggleForceMobileStyle}:{toggleForceMobileStyle: ()=> void}) {
 

  return (
    <div className="bg-gray-100 h-[10vh] px-8  w-full flex justify-between items-center ">
      <div className="flex gap-4 items-center">
        <HambergerMenu onClick={toggleForceMobileStyle} className="cursor-pointer" size={20} color="#000" />
        <img src="/logo.svg" alt="" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="size-10 flex justify-center items-center rounded-full border-2">
          <Notification size={20} color="#000" />
        </div>
        <img src="/image.svg" alt="" className="size-10" />
      </div>
    </div>
  );
}
