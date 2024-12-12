import {
  Category,
  DocumentText,
  InfoCircle,
  Setting2,
  TransactionMinus,
} from "iconsax-react";

export default function Sidebar() {
  return (
    <div className="bg-gray-100 w-[250px]  flex flex-col h-[90vh] py-[10px] px-3">
      <div className="flex flex-col gap-3 w-full">
        <div className="hover:bg-[#fff] font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-full px-4 py-4  flex items-center gap-3">
          <Category variant="Bold" />
          <span>Dashboard</span>
        </div>
        <div className="hover:bg-[#fff] font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-full px-4 py-4  flex items-center gap-3">
          <TransactionMinus />
          <span>Statistics</span>
        </div>
        <div className="hover:bg-[#fff] font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-full px-4 py-4  flex items-center gap-3">
          <DocumentText />
          <span>Resources</span>
        </div>
        <div className="w-full bg-gray-200 h-[1px]"></div>
        <div className="hover:bg-[#fff] font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-full px-4 py-4  flex items-center gap-3">
          <Setting2 />
          <span>Settings</span>
        </div>
        <div className="hover:bg-[#fff] font-semibold cursor-pointer hover:font-extrabold hover:text-[#F83E3E] rounded-full px-4 py-4  flex items-center gap-3">
          <InfoCircle />
          <span>Help & Support</span>
        </div>
      </div>
    </div>
  );
}
