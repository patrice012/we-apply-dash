import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";


export default function Otp(  ) {
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
      /*  const res = await verifyOTP({ email, code });
      if (res.status == 200) {
        navigate("/Opt");
      } */
    } catch (err) {
      return console.log(err);
    }
  };

  return (
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
              We have sent a verification code to your email address. Enter the
              code below to reset your password.
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
              onClick={() => handleVerifyOtp}
              className="bg-[#F83E3E] w-full py-4 rounded-lg text-white font-semibold text-[18px]">
              Continue
            </button>

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
