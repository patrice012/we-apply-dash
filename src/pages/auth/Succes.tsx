import { Link } from "react-router-dom";

export default function Success() {
  return (
    <div className="h-screen bg-gray-300 ">
      <div className="flex w-full px-[60px] h-[12vh] items-center  bg-white shadow-md ">
        <img src="/logo.svg" alt="" className="size-15" />
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] h-[88vh] ">
        <img src="/block.svg" alt="" className="w-[180px]" />
        <div className="flex flex-col text-center items-center gap-[10px]">
          <span className="text-[24px] font-bold">
            Password has been updated
          </span>
          <span>
            All done! You've successfully set up a new password. Don't forget to
            save it securely.
          </span>
        </div>
        <Link to="/login">
          <button className="bg-[#F83E3E] max-w-[40%] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
            Back to login
          </button>
        </Link>
      </div>
    </div>
  );
}
