// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { cron } from "@/utilities/axios";

type Data = {
  name: string;
};

export const config = {
  api: {
    responseLimit: "8mb",
    baseUrl: "http://loclhos.com",
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: "John Doe" });
}
