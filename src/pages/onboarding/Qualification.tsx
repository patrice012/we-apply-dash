import { Add, ArrowLeft2, ArrowRight2, CallCalling } from "iconsax-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { useSession } from "../../context/SessionContext";
import postReq from "../../utils/PostReq";

export default function Qualification() {
  const [Loading, setLoading] = useState(false);
  const { session, loginData } = useSession();
  const extras = [{ key: "authorization", value: "Bearer " + session }];
  const [skills, setSkills] = useState([""]);
  const [certifications, setCertifications] = useState([""]);
  const [educationLevel, setEducationLevel] = useState("");
  const [field, setField] = useState("");
  const [qualification, setQualification] = useState("");
  const navigate = useNavigate();

  const addSkill = () => {
    setSkills([...skills, ""]);
  };

  const addCertification = () => {
    setCertifications([...certifications, ""]);
  };

  const updateSkill = (index: number, value: string) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const updateCertification = (index: number, value: string) => {
    const updatedCertifications = [...certifications];
    updatedCertifications[index] = value;
    setCertifications(updatedCertifications);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await postReq({
        data: {
          userId: loginData,
          educationLevel: educationLevel,
          field: field,
          skills,
          certifications,
          qualification: qualification,
        },
        url: "/account/education",
        extras,
      });

      console.log(response);
      setLoading(false);
      if (response.status == 201) {
        navigate("/done");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

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

            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>3</span>
            </div>
            <div className="flex gap-1 items-center">
              <div className="size-5 text-xs text-[#F83E3E] border rounded-full bg-white  flex justify-center items-center ">
                <span>4</span>
              </div>
              <span>Education</span>
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
            <Link to="/career">
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
            <div className="bg-[#F1F5F9] flex flex-col gap-6 py-8 px-4 lg:p-8 rounded-xl ">
              <div className="flex flex-col gap-2 w-full">
                <span className="text-[24px] font-semibold">
                  Cool! Let’s share something about your qualification!
                </span>
                <span>
                  Mattis pulvinar tellus diam eget ultricies. Amet magna urna
                  ac.
                </span>
              </div>

              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Highest education level*
                </span>
                <select
                  name=""
                  id=""
                  onChange={(e) => {
                    setEducationLevel(e.target.value);
                  }}
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 ">
                  <option value="Lorem ipsum 1">Lorem ipsum 1</option>
                  <option value="Lorem ipsum 2">Lorem ipsum 2 </option>
                  <option value="Lorem ipsum 3">Lorem ipsum 3 </option>
                </select>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Field of study*</span>

                <input
                  type="text"
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 "
                  placeholder="Enter your job title"
                  onChange={(e) => {
                    setField(e.target.value);
                  }}
                />
              </div>
              {/* Skills Fields */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-semibold text-xs">
                  Skills and competencies*
                </span>
                {skills.map((skill, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 mb-2"
                    placeholder="Add skills"
                    value={skill}
                    onChange={(e) => updateSkill(index, e.target.value)}
                  />
                ))}
                <div
                  className="flex items-center font-medium text-sm text-[#571EC4] gap-1 cursor-pointer"
                  onClick={addSkill}
                >
                  <Add size={20} />
                  <span>Add another</span>
                </div>
              </div>

              {/* Certifications Fields */}
              <div className="flex flex-col gap-2 w-full">
                <span className="font-semibold text-xs">Certifications*</span>
                {certifications.map((certification, index) => (
                  <input
                    key={index}
                    type="text"
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-4 mb-2"
                    placeholder="Add certification"
                    value={certification}
                    onChange={(e) => updateCertification(index, e.target.value)}
                  />
                ))}
                <div
                  className="flex items-center font-medium text-sm text-[#571EC4] gap-1 cursor-pointer"
                  onClick={addCertification}
                >
                  <Add size={20} />
                  <span>Add another</span>
                </div>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">
                  Other qualification (optional)
                </span>
                <div className="flex flex-col gap-3 w-full">
                  <textarea
                    name=""
                    id=""
                    maxLength={240}
                    onChange={(e) => {
                      setQualification(e.target.value);
                    }}
                    className=" border p-4 h-[148px] rounded-xl"
                    placeholder="Write other qualifications if have"
                  ></textarea>
                  <div className="flex text-xs justify-between w-full items-center">
                    <span>You have 240 characters remaining</span>
                    <span>0/240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full  items-center">
              <Link to="/done" className="flex w-full ">
                <button className="border py-4 font-semibold rounded-lg w-full">
                  Skip for now
                </button>
              </Link>
              <button
                onClick={handleSubmit}
                className="flex justify-center text-white rounded-lg items-center gap-3 py-4 w-full bg-[#F83E3E] ">
                <ClipLoader
                  color="#fff"
                  loading={Loading}
                  size={25}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
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
