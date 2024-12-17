import postReq from "./PostReq";
export const signin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = await postReq({ url: "/auth/login", data: { email, password } });
  return res;
};

export const signup = async ({
  fullname,
  email,
  password,
}: {
  fullname: string;
  email: string;
  password: string;
}) => {
  const res = await postReq({
    url: "/auth/register",
    data: { fullname, email, password },
  });
  return res;
};

export const sendOTP = async ({
  email, fullname,
}: {
  email: string;
  fullname: string;
}) => {
  const res = await postReq({ url: "/otp/request", data: { email, fullname } });
  return res.status;
};

export const verifyOTP = async ({
  email,
  code,
}: {
  email: string;
  code: number;
}) => {
  const res = await postReq({ url: "/otp/verify", data: { email, code } });
  return res;
};
