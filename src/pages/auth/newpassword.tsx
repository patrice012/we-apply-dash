import { EyeSlash, Key } from "iconsax-react";
import { Link } from "react-router-dom";

export default function NewPassword() {
  return (
    <div className="h-screen bg-gray-300">
      <div className="flex w-full px-[60px] h-[12vh] items-center  bg-white shadow-md ">
        <img src="/logo.svg" alt="" className="size-15" />
      </div>
      <div className="flex items-center h-[88vh] justify-center">
        <div className="flex flex-col gap-6 px-10 py-6 rounded-[16px] w-[600px] bg-white shadow-md">
          <div className="flex flex-col gap-2">
            <span className="text-gray-900 font-bold text-[24px]">
              Set new password
            </span>
            <span>Reset your password with just a few click.</span>
          </div>
          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col relative gap-2 w-full">
              <span className="font-semibold text-xs">Password</span>
              <Key
                size={20}
                color="#1f2937"
                className="absolute left-4 top-[34px]"
              />
              <EyeSlash
                size={20}
                color="#1f2937"
                className="absolute right-4 top-[34px]"
              />
              <input
                type="password"
                className="w-full border-gray-200 border rounded-[8px] py-2 px-10 "
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col relative gap-2 w-full">
              <span className="font-semibold text-xs">Password</span>
              <Key
                size={20}
                color="#1f2937"
                className="absolute left-4 top-[34px]"
              />
              <EyeSlash
                size={20}
                color="#1f2937"
                className="absolute right-4 top-[34px]"
              />
              <input
                type="password"
                className="w-full border-gray-200 border rounded-[8px] py-2 px-10 "
                placeholder="Enter your full name"
              />
            </div>
            <Link to="/success">
              <button className="bg-[#F83E3E] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
                Update password
              </button>
            </Link>
            <Link
              className="w-full flex items-center justify-center"
              to="/login">
              <span className="text-center cursor-pointer">Back to login</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
