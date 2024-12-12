import { Link } from "react-router-dom";

export default function Done() {
  return (
    <div className="h-screen bg-gray-300 ">
      <div className="flex w-full px-[60px] h-[12vh] items-center  bg-white shadow-md ">
        <img src="/logo.svg" alt="" className="size-15" />
      </div>
      <div className="flex flex-col px-5 justify-center items-center gap-[30px] h-[88vh] ">
        <img src="/congratulations.svg" alt="" className="w-[180px]" />
        <div className="flex flex-col text-center items-center gap-[10px]">
          <span className="text-[24px] font-bold">
            Your profile has been created!
          </span>
          <span>
            Your profile is complete. We'll start applying to jobs on your
            behalf in the next 1-2 business days.
          </span>
        </div>
        <Link className="flex w-full items-center justify-center" to="/dashboard">
          <button className="bg-[#F83E3E] md:max-w-[40%] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
            Go to Your Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
