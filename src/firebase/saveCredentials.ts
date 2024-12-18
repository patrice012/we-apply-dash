import postReq from "../utils/PostReq";

export const saveCredentials = async ({
  data,
  url,
}: {
  data: unknown;
  url: string;
}) => {
  try {
    const serverAnswer = await postReq({ data, url });

    return serverAnswer;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
