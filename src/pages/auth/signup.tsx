import { useRef, useState } from "react";
import { EyeSlash, Eye, Key, Sms, User } from "iconsax-react";
import { Link } from "react-router-dom";
import { googleSign, sendOTP, signup, verifyOTP } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { signinWithGoogle } from "../../firebase/googleAuth";
import { useSession } from "../../context/SessionContext";

export default function Signup() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const { setSession, setLoginData } = useSession();
  const navigate = useNavigate();
  const [sendOtp, setSendOtp] = useState(false);

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

  // Évalue la qualité du mot de passe
  const getPasswordStrength = () => {
    let strength = 0;
    if (password.length >= 8) strength++; // Longueur minimale
    if (/[A-Z]/.test(password)) strength++; // Au moins une majuscule
    if (/[0-9]/.test(password)) strength++; // Au moins un chiffre
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Au moins un caractère spécial
    return strength;
  };

  const handleSignup = async () => {
    try {
      const res = await sendOTP({ email, fullname });
      if (res == 200) {
        setSendOtp(true);
      }
    } catch (err) {
      return console.log(err);
    }
  };

  const passwordStrength = getPasswordStrength();

  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    // Limiter à un seul caractère
    if (value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Passer au champ suivant si une valeur est saisie
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    // Si "Backspace" est pressé
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);

      // Revenir au champ précédent si vide
      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }

    // Si "ArrowRight" ou "ArrowLeft" est pressé
    if (e.key === "ArrowRight" && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text");
    const newOtp = [...otp];
    data.split("").forEach((char, idx) => {
      if (idx < otp.length) {
        newOtp[idx] = char;
      }
    });
    setOtp(newOtp);

    // Aller au dernier champ rempli
    const lastIndex = data.length < otp.length ? data.length : otp.length - 1;
    inputRefs.current[lastIndex]?.focus();
  };

  const handleVerifyOtp = async () => {
    try {
      console.log(otp.join(""));
      const code = parseInt(otp.join(""));
      const res = await verifyOTP({ email, code });
      if (res.status == 200) {
        const sign = await signup({ fullname, email, password });
        console.log(sign);

        if (sign.status == 201) {
          const { token, userId } = sign.data;
          console.log(token);
          setSession(token);
          setLoginData(userId);
          return navigate("/Resume");
        }
      }
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <div>
      {sendOtp ? (
        <div className="h-screen bg-gray-300">
          <div className="flex w-full px-[60px] h-[12vh] items-center bg-white shadow-md">
            <img src="/logo.svg" alt="" className="size-15" />
          </div>
          <div className="flex items-center h-[88vh] px-5 justify-center">
            <div className="flex flex-col gap-6 px-5 lg:px-10 py-6 rounded-[16px] w-[600px] bg-white shadow-md">
              <div className="flex flex-col gap-2">
                <span className="text-gray-900 font-bold text-[24px]">
                  Verify OTP
                </span>
                <span>
                  We have sent a verification code to your email address. Enter
                  the code below to reset your password.
                </span>
              </div>
              <div className="flex flex-col gap-5 w-full">
                <div className="flex gap-2 w-full">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      type="text"
                      value={digit}
                      maxLength={1}
                      ref={(el) => (inputRefs.current[index] = el)}
                      onChange={(e) => handleChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className="w-full border-gray-200 border rounded-[8px] py-2 text-center text-[24px] font-semibold"
                    />
                  ))}
                </div>

                <button
                  onClick={handleVerifyOtp}
                  className="bg-[#F83E3E] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
                  Continue
                </button>

                <Link
                  className="w-full flex items-center justify-center"
                  to="/login">
                  <span className="text-center cursor-pointer">
                    Back to login
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 h-screen col-span-2 w-full">
          <div className="hidden lg:grid col-span-1 items-center w-full justify-center px-[80px] bg-contain bg-[url('/graphics.svg')] bg-[#682ae3e4]">
            <div className="pt-[200px] text-white flex flex-col items-center justify-center gap-6 w-full ">
              <div className="flex gap-1 items-center">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <img key={idx} src="/Star.svg" alt="" />
                ))}
              </div>
              <span className="text-center">
                Vivamus libero quis proin massa faucibus interdum vel. Quis
                morbi in habitasse ullamcorper nunc ut sit egestas. Dolor amet
                placerat vitae mauris feugiat augue. Id est commodo tellus
                dictum nunc elit sapien eros. Feugiat gravida massa tincidunt
                urna proin donec at volutpat.
              </span>
              <div className="flex flex-col w-full items-center justify-center">
                <img src="/image.svg" alt="" />
                <span className="text-[20px] font-bold">Omer Hassan</span>
                <span>Ex Google | Project Manager at WeApply</span>
              </div>
            </div>
          </div>
          <div className="bg-white col-span-2 lg:col-span-1 px-[15px] md:px-[30px] xl:px-[60px] justify-between overflow-y-auto h-full flex flex-col items-start">
            <img src="/logo.svg" alt="" className="py-10" />
            <div className="flex flex-col items-start py-[80px] w-full gap-[24px]">
              <div className="flex flex-col gap-2">
                <span className="font-semibold text-[24px]">
                  Welcome! Let’s start by creating your account
                </span>
                <span>
                  Nunc porta praesent augue lacus pellentesque sit amet.
                </span>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col relative gap-2 w-full">
                    <span className="font-semibold text-xs">Full Name</span>
                    <User
                      size={20}
                      color="#1f2937"
                      className="absolute left-4 top-[34px]"
                    />
                    <input
                      type="text"
                      className="w-full border-gray-200 border rounded-[8px] py-2 px-10"
                      placeholder="Enter your full name"
                      onChange={(e) => {
                        setFullname(e.target.value);
                      }}
                    />
                  </div>
                  <div className="flex flex-col relative gap-2 w-full">
                    <span className="font-semibold text-xs">Email Address</span>
                    <Sms
                      size={20}
                      color="#1f2937"
                      className="absolute left-4 top-[36px]"
                    />
                    <input
                      type="email"
                      className="w-full border-gray-200 border rounded-[8px] py-2 px-10"
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
                  {/* Indicateur de qualité du mot de passe */}
                  <div className="flex gap-2 mt-2">
                    {Array.from({ length: 4 }).map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 flex-1 rounded-md ${
                          idx < passwordStrength
                            ? passwordStrength < 2
                              ? "bg-red-600"
                              : passwordStrength < 3
                              ? "bg-yellow-500"
                              : passwordStrength < 4
                              ? "bg-orange-500"
                              : "bg-green-500"
                            : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex-col flex gap-2">
                    <span className="text-xs text-gray-500">
                      Password must:
                    </span>
                    <div className="flex-col flex gap-2 pl-5">
                      <div className="flex gap-1 items-center">
                        <div className="size-1 rounded-full bg-slate-500 shrink-0"></div>
                        <span className="text-xs text-gray-500">
                          be at least 8 characters long
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="size-1 rounded-full bg-slate-500 shrink-0"></div>
                        <span className="text-xs text-gray-500">
                          contain uppercase & lowercase letters
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="size-1 rounded-full bg-slate-500 shrink-0"></div>
                        <span className="text-xs text-gray-500">
                          contain numbers
                        </span>
                      </div>
                      <div className="flex gap-1 items-center">
                        <div className="size-1 rounded-full bg-slate-500 shrink-0"></div>
                        <span className="text-xs text-gray-500">
                          contain special characters
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm">
                      I have read and accept the{" "}
                      <span className="text-[#571EC4]">privacy conditions</span>{" "}
                      and <span className="text-[#571EC4]">general terms</span>{" "}
                      of use.
                    </span>
                  </div>

                  <button
                    onClick={handleSignup}
                    className="bg-[#F83E3E] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
                    Create your account
                  </button>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <div className="flex w-full h-[1px] bg-[#D1D5DB]"></div>{" "}
                  <span>Or</span>{" "}
                  <div className="flex w-full h-[1px] bg-[#D1D5DB]"></div>
                </div>
                <button
                  onClick={googleLogin}
                  className="w-full border-gray-200 border justify-center flex gap-4 items-center py-4 rounded-lg text-black text-[16px]">
                  <img src="/google.svg" alt="" /> Continue with Google
                </button>
                <span className="text-center">
                  Already have an account?{" "}
                  <Link to="/login">
                    <span className="font-semibold cursor-pointer">Login</span>
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
      )}
    </div>
  );
}
