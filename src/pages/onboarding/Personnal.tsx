/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowLeft2,
  ArrowRight2,
  Calendar,
  CallCalling,
  Camera,
  CloudAdd,
  Location,
  Sms,
  User,
} from "iconsax-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postReq from "../../utils/PostReq";
import { useSession } from "../../context/SessionContext";
import { ClipLoader } from "react-spinners";

export default function Personal() {
  const [Loading, setLoading] = useState(false);
  const { session, loginData } = useSession();
  const extras = [{ key: "authorization", value: "Bearer " + session }];
  const [formData, setFormData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    birthDay: "",
    about: "",
    pictureUrl: null,
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData({ ...formData, pictureUrl: file as any });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setLoading(true);
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
       
        const value = (formData as any)[key];
        if (value) data.append(key, value);
      });
      data.append("userId", loginData);

      console.log("FormData contenu :");
      data.forEach((value, key) => {
        console.log(`${key}: ${value}`);
      });

      const response = await postReq({
        data: data,
        url: "/account/personalInfo",
        extras,
        isFileUpload: true,
      });

      console.log(response);
      setLoading(false);
      if (response.status == 201) {
        navigate("/career");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className=" bg-gray-200  h-full bg-[url('/Rectangle.svg')] pb-8 bg-contain bg-no-repeat">
      <div className="flex flex-col gap-4 px-4 lg:px-12  w-full">
        <div className="flex  md:flex-row flex-col gap-2 items-center w-full  border-b border-[#692AE3]  justify-between py-[12px] ">
          <img src="/logoWhite.svg" alt="" />
          <div className="flex gap-2 text-white items-center ">
            <div className="size-5 text-xs border rounded-full   flex justify-center items-center ">
              <span>1</span>
            </div>
            <div className="flex gap-1 items-center">
              <div className="size-5 text-xs text-[#F83E3E] border rounded-full bg-white  flex justify-center items-center ">
                <span>2</span>
              </div>
              <span>Profile</span>
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
            <Link to="/resume">
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
                  Tell us about yourself!
                </span>
                <span>
                  Create your profile for WeApply and tell us more about
                  yourself.
                </span>
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <div className="flex gap-4 border bg-[#fff] p-4 flex-col rounded-lg">
                  <span>Upload profile photo*</span>
                  <div className="flex md:flex-row flex-col gap-4 items-center">
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-[70px] h-[70px] rounded-full"
                      />
                    ) : (
                      <img
                        src="/image.svg"
                        alt="Default"
                        className="w-[70px] h-[70px] rounded-full"
                      />
                    )}
                    <div className="flex flex-col items-center md:items-start gap-2">
                      <div className="flex sm:flex-row flex-col cursor-pointer gap-2 sm:gap-4 items-center">
                        <label className="flex gap-2 items-center cursor-pointer">
                          <CloudAdd color="#571EC4" size={24} variant="Bold" />
                          <span className="font-semibold text-[#571EC4]">
                            Upload file
                          </span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                          />
                        </label>
                        <button
                          onClick={() =>
                            alert("Taking a photo is not yet implemented!")
                          }
                          className="flex gap-2 cursor-pointer items-center">
                          <Camera color="#571EC4" size={24} variant="Bold" />
                          <span className="font-semibold text-[#571EC4]">
                            Take photo
                          </span>
                        </button>
                      </div>
                      <span>
                        <span className="font-semibold cursor-pointer text-[#571EC4]">
                          Learn more
                        </span>{" "}
                        about how to take a good profile picture.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5  md:gap-3w-full">
                <div className="flex relative flex-col gap-2 w-full">
                  <span className="font-semibold text-xs">First name</span>
                  <User
                    size={20}
                    color="#1f2937"
                    className="absolute left-4 top-[38px]"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-10 "
                    placeholder="Enter name"
                  />
                </div>
                <div className="flex relative flex-col gap-2 w-full">
                  <span className="font-semibold text-xs">Last name</span>
                  <User
                    size={20}
                    color="#1f2937"
                    className="absolute left-4 top-[38px]"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-10 "
                    placeholder="Enter name"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col gap-5  md:gap-3 w-full">
                <div className="flex relative flex-col gap-2 w-full">
                  <span className="font-semibold text-xs">Email</span>
                  <Sms
                    size={20}
                    color="#1f2937"
                    className="absolute left-4 top-[38px]"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-10 "
                    placeholder="Enter email"
                  />
                </div>
                <div className="flex relative flex-col gap-2 w-full">
                  <span className="font-semibold text-xs">Phone number</span>
                  <CallCalling
                    size={20}
                    color="#1f2937"
                    className="absolute left-4 top-[38px]"
                  />
                  <input
                    type="text"
                    onChange={(e) =>
                      setFormData({ ...formData, phoneNumber: e.target.value })
                    }
                    className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-10 "
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Physical address</span>{" "}
                <Location
                  size={20}
                  color="#1f2937"
                  className="absolute left-4 top-[38px]"
                />
                <input
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 px-10 "
                  placeholder="Enter your address"
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Date of birth*</span>
                <Calendar
                  size={20}
                  color="#1f2937"
                  className="absolute left-4 top-[40px]"
                />
                <input
                  type="date"
                  onChange={(e) =>
                    setFormData({ ...formData, birthDay: e.target.value })
                  }
                  className="w-full bg-white border-gray-200 border rounded-[8px] py-3 pr-3 pl-10 "
                  placeholder="Select your date of birth"
                />
              </div>

              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">About you*</span>
                <div className="flex flex-col gap-3 w-full">
                  <textarea
                    name=""
                    id=""
                    maxLength={240}
                    onChange={(e) =>
                      setFormData({ ...formData, about: e.target.value })
                    }
                    className=" border p-4 h-[148px] rounded-xl"
                    placeholder="Write something about yourself"></textarea>
                  <div className="flex text-xs justify-between w-full items-center">
                    <span>You have 240 characters remaining</span>
                    <span>0/240</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-6 w-full  items-center">
              <Link to="/career" className="flex w-full ">
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
