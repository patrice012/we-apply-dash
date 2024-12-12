import {
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
  CallCalling,
} from "iconsax-react";
import { Link } from "react-router-dom";

export default function Career() {
  return (
    <div className=" bg-gray-200  h-full bg-[url('/Rectangle.svg')] pb-8 bg-contain bg-no-repeat">
      <div className="flex flex-col gap-4 px-4 lg:px-12 w-full">
        <div className="flex md:flex-row flex-col gap-2 items-center w-full  border-b border-[#692AE3]  justify-between py-[12px] ">
          <img src="/logoWhite.svg" alt="" />
          <div className="flex gap-2 text-white items-center ">
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>1</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>2</span>
            </div>
            <div className="flex gap-1 items-center">
              <div className="size-5 text-xs text-[#F83E3E] border rounded-full bg-white  flex justify-center items-center ">
                <span>3</span>
              </div>
              <span>Career</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>4</span>
            </div>

            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>5</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>6</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>7</span>
            </div>
          </div>
        </div>
        <div className="bg-white shadow items-center rounded-xl px-4 lg:px-[28px] py-8 w-full flex flex-col ">
          <div className="flex justify-between items-start w-full">
            <Link to="/personalInfo">
              <div className="flex gap-2 items-center">
                <ArrowLeft2 size={15} color="#000" />
                <span>Back</span>
              </div>
            </Link>
            <div className="flex gap-2 items-start">
              <div className="border-2 size-10 flex justify-center items-center rounded-full">
                <CallCalling size={20} color="#000" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold">Talk with an expert</span>
                <span>+123 456 789 1234</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-[28px]  max-w-[750px] w-full">
            <div className="bg-[#F1F5F9] flex flex-col gap-6 py-8 px-5 lg:p-8 rounded-xl ">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[24px] font-semibold">
                  Great! Add something about your career.
                </span>
                <span>
                  Integer tempor ut ipsum amet interdum diam leo morbi. Libero.
                </span>
              </div>
              <div className="border rounded-lg items-start sm:flex-row flex-col flex gap-3 border-[#DCD7FE]">
                <img src="/flash.svg" className="p-4" alt="" />
                <div className="flex flex-col px-4 sm:py-4 gap-1">
                  <span className="text-sm text-[#F83E3E] font-bold">
                    Autofill data
                  </span>
                  <span>
                    Save time by importing your resume. Documents must be
                    smaller than 10MB.
                  </span>
                </div>
                <div className="flex flex-col py-4 px-4 text-white ">
                  <button className="px-4 py-2 flex items-center gap-2 rounded-[4px] text-nowrap flex-nowrap bg-[#F83E3E]">
                    Import resume from{" "}
                    <div className="h-[15px] w-[1px] bg-white "></div>
                    <ArrowDown2 size={15} color="#fff" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Years of experience*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter number of experience"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Current job title*
                </span>
                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter your job title"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Current employer*</span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter number of experience"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Desired job title*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter desired job title"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Preferred industries*
                </span>
                <select
                  name=""
                  id=""
                  
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 ">
                  <option value="">Lorem ipsum 1</option>
                  <option value="">Lorem ipsum 2 </option>
                  <option value="">Lorem ipsum 3 </option>
                </select>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Geographic preferences*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter geographic preferences"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Salary expectations*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter your expected salary"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Availability to start*
                </span>

                <input
                  type="date"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Select date"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Work authorization status*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Select status"
                />
              </div>
            </div>
            <div className="flex gap-6 w-full  items-center">
              <button className="border py-4 font-semibold rounded-lg w-full">
                Skip for now
              </button>
              <Link to="/qualification" className="flex w-full ">
                <button className="flex justify-center text-white rounded-lg items-center gap-3 py-4 w-full bg-[#F83E3E] ">
                  <ArrowRight2 size={18} color="#fff" />
                  <span>Continue</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}