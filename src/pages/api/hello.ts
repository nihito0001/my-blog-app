// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { useSession, signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth/[...nextauth]";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const session = await getServerSession(req, res, authOptions);
  console.debug(session);
  // const { data } = useSession();
  // const { accessToken } = data;

  if (session) {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}
