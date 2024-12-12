import {
  Filter,
  Like1,
  Link21,
  MessageText1,
  SearchNormal1,
} from "iconsax-react";
import AppLayout from "../../components/Layout";
export default function Dashboard() {
  return (
    <AppLayout>
      <div className="pb-4 pt-[10px] px-4 h-[90vh] bg-gray-100 w-full flex  ">
        <div className="rounded-[28px] flex flex-col py-8 px-6 xl:px-8 h-full w-full scrollbar scrollbar-thumb-[#d4d4d4] scrollbar-w-[7px] scrollbar-thumb-rounded-full overflow-y-auto pb-10 bg-white gap-[28px] ">
          <div className="flex sm:flex-row flex-col gap-3 w-full justify-between sm:items-center">
            <span className="font-bold text-[24px]">
              Good evening, Omer Hassan!
            </span>
            <div className="flex items-center gap-2">
              <span>Application Status</span>
            </div>
          </div>
          <div className="grid  lg:grid-cols-3 col-span-3 items-center w-full gap-3 xl:gap-5">
            <div className="flex bg-[#FFCDD3] p-4 gap-4 rounded-xl">
              <div className="bg-[#fff] rounded-[7px] p-[16px] ">
                <Link21 color="#DF4425" size={40} />
              </div>
              <div className="flex gap-[10px] flex-col ">
                <div className="flex w-full justify-between">
                  <span>Total Jobs Applied</span>
                </div>
                <span className="font-bold text-[24px]">1652</span>
              </div>
            </div>
            <div className="flex bg-[#D6DBFF] p-4 gap-4 rounded-xl">
              <div className="bg-[#fff] rounded-[7px] p-[16px] ">
                <MessageText1 size={40} />
              </div>
              <div className="flex gap-[10px] flex-col ">
                <div className="flex w-full justify-between">
                  <span>Interviews Called</span>
                </div>
                <span className="font-bold text-[24px]">1652</span>
              </div>
            </div>
            <div className="flex bg-[#C8E6C9] p-4 gap-4 rounded-xl">
              <div className="bg-[#fff] rounded-[7px] p-[16px] ">
                <Like1 color="#2F7D31" size={40} />
              </div>
              <div className="flex gap-[10px] flex-col ">
                <div className="flex w-full justify-between">
                  <span>Avg. Interview Rate</span>
                </div>
                <span className="font-bold text-[24px]">100%</span>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col items-start gap-3 sm:items-center w-full justify-between">
            <span className="text-gray-800 text-[24px] font-bold">
              Job Dashboard (112)
            </span>
            <div className="flex relative w-full sm:w-auto items-center gap-3">
              <div className="border-2 rounded-full flex justify-center items-center size-10 ">
                <Filter size={25} />
              </div>
              <SearchNormal1 className="absolute top-2 right-3" />
              <input
                type="text"
                placeholder="Search..."
                className="border w-full sm:w-[250px] py-2 pl-4 pr-10 rounded-full border-gray-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[20px]  ">
            {Array.from({ length: 5 }).map((_e, idx: number) => {
              return (
                <div key={idx} className="flex w-full items-center ">
                  <div className="w-full flex flex-col md:flex-row gap-4  md:items-center py-4 px-[10px] md:p-4 rounded-xl bg-white border border-gray-200 justify-between">
                    <div className="flex w-full gap-[12px] items-start">
                      <div className="size-14 border-[1.5px] border-[#E7E9EB] rounded-full bg-white p-2">
                        <img
                          src={
                            "https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                          }
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <span className="text-[#231232] font-semibold text-[14px] md:text-[16px]">
                          Site Reliability Engineer (SRE)
                        </span>
                        <span className="text-[#231232] text-[12px] md:text-[14px]">
                          Manager | On Site | VueJS | Google LLC
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-[8px]">
                      <button className=" hover:bg-[#fff] hover:text-[#F83E3E] transition ease-in-out duration-500  w-full justify-center md:items-center flex  items-center rounded-[8px] border border-[#F83E3E]  px-[16px] md:w-[180px] py-[10px] text-[14px] font-medium  text-[#F83E3E] text-nowrap">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
