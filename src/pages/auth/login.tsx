/* eslint-disable no-irregular-whitespace */
import { Sms, Key, EyeSlash, Eye } from "iconsax-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { signinWithGoogle } from "../../firebase/googleAuth";
import { useNavigate } from "react-router-dom";
import { googleSign, signin } from "../../utils/auth";
import { useSession } from "../../context/SessionContext";

export default function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
   const { setSession, setLoginData } = useSession();
  const navigate = useNavigate();

  const googleLogin = async (e: {
    stopPropagation: () => void;
    preventDefault: () => void;
  }) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      const user = await signinWithGoogle();
      if (user) {
        const data = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        };
        console.log(data);
        const sign = await googleSign({
          fullname: data.name,
          email: data.email,
          password: data.uid,
        });
        console.log(sign);

        if (sign.status == 201) {
          const { token, userId } = sign.data;
          setSession(token);
          setLoginData(userId);
          return navigate("/Resume");
        }
      } else {
        console.log("error login with google");
      }
    } catch (error) {
      const err = error as Error;
      console.log(err.message);
    }
  };


  const Login = async () => {
    try {
      const res = await signin({ email, password });
      if (res.status == 200) {
        const { token, userId } = res.data;
        console.log(token);
        setSession(token);
        setLoginData(userId);
        return navigate("/Resume");
      }
    } catch (err) {
      console.log("error :", err);
    }
  };

  return (
    <div className="grid grid-cols-2 h-screen col-span-2 w-full">
      <div className="hidden lg:grid col-span-1  items-center  w-full justify-center px-[80px] bg-contain bg-[url('/graphics.svg')] bg-[#682ae3e4]">
        <div className="pt-[200px] text-white flex flex-col items-center justify-center gap-6 w-full ">
          <div className="flex gap-1 items-center ">
            {Array.from({ length: 5 }).map((em, idx) => (
              <img key={idx} src="/Star.svg" alt="" />
            ))}
          </div>
          <span className="text-center">
            Vivamus libero quis proin massa faucibus interdum vel. Quis morbi in
            habitasse ullamcorper nunc ut sit egestas. Dolor amet placerat vitae
            mauris feugiat augue. Id est commodo tellus dictum nunc elit sapien
            eros. Feugiat gravida massa tincidunt urna proin donec at volutpat.
          </span>
          <div className="flex flex-col w-full items-center justify-center">
            <img src="/image.svg" alt="" />
            <span className="text-[20px] font-bold">Omer Hassan</span>

            <span>Ex Google | Project Manager at WeApply</span>
          </div>
        </div>
      </div>
      <div className="bg-white col-span-2 lg:col-span-1 px-[15px] md:px-[30px] xl:px-[60px] justify-between overflow-y-auto h-full flex flex-col items-start">
        <img src="/logo.svg" alt="" className="py-10" />
        <div className="flex flex-col items-start py-[60px] w-full gap-[24px]">
          <div className="flex flex-col gap-2">
            <span className="font-semibold text-[24px]">
              Welcome Back! Login to your account
            </span>
            <span>Sed id leo lacus in amet. Egestas placerat ut leo arcu.</span>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Email Address</span>
                <Sms
                  size={20}
                  color="#1f2937"
                  className="absolute left-4 top-[36px]"
                />
                <input
                  type="text"
                  className="w-full border-gray-200 border rounded-[8px] py-2 px-10 "
                  placeholder="Enter email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="flex flex-col relative gap-2 w-full">
                <span className="font-semibold text-xs">Password</span>
                <Key
                  size={20}
                  color="#1f2937"
                  className="absolute left-4 top-[34px]"
                />
                {passwordVisible ? (
                  <Eye
                    size={20}
                    color="#1f2937"
                    className="absolute right-4 top-[34px] cursor-pointer"
                    onClick={() => setPasswordVisible(false)}
                  />
                ) : (
                  <EyeSlash
                    size={20}
                    color="#1f2937"
                    className="absolute right-4 top-[34px] cursor-pointer"
                    onClick={() => setPasswordVisible(true)}
                  />
                )}
                <input
                  type={passwordVisible ? "text" : "password"}
                  className="w-full border-gray-200 border rounded-[8px] py-2 px-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Link to="/forgot">
                <span className="underline w-full text-right text-xs font-semibold cursor-pointer">
                  Forgot Password?
                </span>
              </Link>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-sm">
                  I have read and accept the{" "}
                  <span className="text-[#571EC4]">privacy conditions</span> and{" "}
                  <span className="text-[#571EC4]">general terms</span> of use
                  of www.ideclouds.net
                </span>
              </div>

              <button
                onClick={Login}
                className="bg-[#F83E3E] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
                Login
              </button>
            </div>
            <div className="flex items-center gap-2 w-full">
              <div className="flex w-full h-[1px] bg-[#D1D5DB]"></div>{" "}
              <span>Or</span>{" "}
              <div className="flex w-full h-[1px] bg-[#D1D5DB]"></div>
            </div>
            <button
              onClick={googleLogin}
              className=" w-full border-gray-200 border justify-center flex gap-4 items-center py-4 rounded-lg text-black  text-[16px]">
              <img src="/google.svg" alt="" /> Continue with Google
            </button>
            <span className="text-center">
              Don’t have an account?{" "}
              <Link to="/">
                <span className="font-semibold cursor-pointer">
                  Create you account
                </span>
              </Link>
            </span>
          </div>
        </div>
        <div className="py-[40px] flex items-center justify-center gap-3 w-full">
          <span>@WeApply 2024</span>
          <div className="size-1 rounded-full bg-black"></div>
          <span>Privacy</span>
          <div className="size-1 rounded-full bg-black"></div>
          <span>Terms of service</span>
        </div>
      </div>
    </div>
  );
}
