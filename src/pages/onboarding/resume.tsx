import {
  ArrowLeft2,
  ArrowRight2,
  CallCalling,
  DocumentUpload,
  InfoCircle,
} from "iconsax-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import postReq from "../../utils/PostReq";
import { useNavigate } from "react-router-dom";

export default function Resume() {
  const file = useRef<HTMLInputElement | null>();
  // const [linkedinUrl, setLinkedinUrl] = useState("");
  // const [portfolioUrl, setPortfolioUrl] = useState("");
  // const [coverLetter, setCoverLetter] = useState("");
  const navigate = useNavigate();

  const ChooseFile = () => {
    file.current?.click();
  };

  const addResume = async () => {
    try {
      const res = await postReq({ url: "/account/resume", data: {} });
      if (res.status == 201) {
        navigate("/personalInfo");
      }
    } catch (err) {
      console.log("error :", err);
    }
  };
  return (
    <div className=" bg-gray-200  h-full bg-[url('/Rectangle.svg')] pb-8 bg-contain bg-no-repeat">
      <div className="flex flex-col gap-4 px-4 lg:px-12 w-full">
        <div className="flex md:flex-row flex-col gap-2 items-center w-full  border-b border-[#692AE3]  justify-between py-[12px] ">
          <img src="/logoWhite.svg" alt="" />
          <div className="flex gap-2 text-white items-center ">
            <div className="flex gap-1 items-center">
              <div className="size-5 text-xs text-[#F83E3E] border rounded-full bg-white  flex justify-center items-center ">
                <span>1</span>
              </div>
              <span>Resume</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>2</span>
            </div>
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>3</span>
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
            <div className="flex gap-2 cursor-pointer items-center">
              <ArrowLeft2 size={15} color="#000" />
              <span>Back</span>
            </div>
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
            <div className="bg-[#F1F5F9] py-8 px-5  flex flex-col gap-6 lg:p-8 rounded-xl ">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[24px] font-semibold">
                  Upload your resume to get started
                </span>
                <span>
                  Your resume will help us to apply to the jobs that match with
                  your experience and exceptions.
                </span>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  LinkedIn Profile URL*
                </span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter your linkedin profile url"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Portfolio URL</span>
                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter your portfolio url"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Resume</span>
                <div
                  onClick={ChooseFile}
                  className="flex flex-col gap-5 w-full"
                >
                  <div className="flex flex-col items-center gap-2 justify-center border rounded-xl h-[220px] bg-[#fff]">
                    <DocumentUpload size={25} color="#000" />
                    <span>Click or Drag & Drop Your Resume</span>
                  </div>
                </div>
                <input
                  ref={file as React.MutableRefObject<HTMLInputElement | null>}
                  type="text"
                  className="hidden"
                />
                <div className="flex md:flex-row flex-col gap-2 text-sm justify-between items-center">
                  <span>Supported formats: PDF only</span>
                  <div className="flex gap-1 items-center">
                    {" "}
                    <span>Maximum file size: 10MB</span>{" "}
                    <InfoCircle size={15} color="#000" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Cover letter</span>
                <div className="flex flex-col gap-3 w-full">
                  <textarea
                    name=""
                    id=""
                    maxLength={240}
                    className=" border p-4 h-[148px] rounded-xl"
                    placeholder="Write something about yourself"
                  ></textarea>
                  <div className="flex text-xs justify-between w-full items-center">
                    <span>You have 240 characters remaining</span>
                    <span>0/240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full  items-center">
              <Link className="flex w-full" to="/personalInfo">
                <button className="border py-4 font-semibold rounded-lg w-full">
                  Skip for now
                </button>
              </Link>
              <button
                onClick={addResume}
                className="flex justify-center text-white rounded-lg items-center gap-3 py-4 w-full bg-[#F83E3E] "
              >
                <ArrowRight2 size={18} color="#fff" />
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
