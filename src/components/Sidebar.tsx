import {
  Category,
  DocumentText,
  InfoCircle,
  Setting2,
  TransactionMinus,
} from "iconsax-react";

export default function Sidebar({
  forceMobileStyle,
}: {
  forceMobileStyle: boolean;
}) {
  return (
    <div className={`  ${forceMobileStyle ? "" : "xl:w-[250px]" } " bg-gray-100  hidden lg:flex flex-col h-[90vh] py-[10px] px-3 "`}>
      <div className="flex flex-col gap-3 items-center  w-full">
        <div
          className={`hover:bg-[#fff] text-xs ${
            forceMobileStyle ? "text-xs" : "xl:text-base"
          } font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-md ${
            forceMobileStyle ? "rounded-md" : "xl:rounded-full"
          } p-2 ${forceMobileStyle ? "px-2 py-2" : "xl:px-4 xl:py-4"} ${
            forceMobileStyle ? "w-full" : "xl:w-full"
          } flex ${
            forceMobileStyle
              ? "flex-col gap-2"
              : "xl:flex-row flex-col xl:gap-3"
          } items-center`}>
          <Category variant="Bold" />
          <span>Dashboard</span>
        </div>
        <div
          className={`hover:bg-[#fff] text-xs ${
            forceMobileStyle ? "text-xs" : "xl:text-base"
          } font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-md ${
            forceMobileStyle ? "rounded-md" : "xl:rounded-full"
          } p-2 ${forceMobileStyle ? "px-2 py-2" : "xl:px-4 xl:py-4"} ${
            forceMobileStyle ? "w-full" : "xl:w-full"
          } flex ${
            forceMobileStyle
              ? "flex-col gap-2"
              : "xl:flex-row flex-col xl:gap-3"
          } items-center`}>
          <TransactionMinus />
          <span>Statistics</span>
        </div>
        <div
          className={`hover:bg-[#fff] text-xs ${
            forceMobileStyle ? "text-xs" : "xl:text-base"
          } font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-md ${
            forceMobileStyle ? "rounded-md" : "xl:rounded-full"
          } p-2 ${forceMobileStyle ? "px-2 py-2" : "xl:px-4 xl:py-4"} ${
            forceMobileStyle ? "w-full" : "xl:w-full"
          } flex ${
            forceMobileStyle
              ? "flex-col gap-2"
              : "xl:flex-row flex-col xl:gap-3"
          } items-center`}>
          <DocumentText />
          <span>Resources</span>
        </div>
        <div className="w-full bg-gray-200 h-[1px]"></div>
        <div
          className={`hover:bg-[#fff] text-xs ${
            forceMobileStyle ? "text-xs" : "xl:text-base"
          } font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-md ${
            forceMobileStyle ? "rounded-md" : "xl:rounded-full"
          } p-2 ${forceMobileStyle ? "px-2 py-2" : "xl:px-4 xl:py-4"} ${
            forceMobileStyle ? "w-full" : "xl:w-full"
          } flex ${
            forceMobileStyle
              ? "flex-col gap-2"
              : "xl:flex-row flex-col xl:gap-3"
          } items-center`}>
          <Setting2 />
          <span>Settings</span>
        </div>
        <div className={`hover:bg-[#fff] text-xs ${
            forceMobileStyle ? "text-xs" : "xl:text-base"
          } font-semibold cursor-pointer text-center hover:font-extrabold hover:text-[#F83E3E] rounded-md ${
            forceMobileStyle ? "rounded-md" : "xl:rounded-full"
          } p-2 ${forceMobileStyle ? "px-2 py-2" : "xl:px-4 xl:py-4"} ${
            forceMobileStyle ? "w-full" : "xl:w-full"
          } flex ${
            forceMobileStyle
              ? "flex-col gap-2"
              : "xl:flex-row flex-col xl:gap-3"
          } items-center`}>
          <InfoCircle />
          <span>Help & Support</span>
        </div>
      </div>
    </div>
  );
}
