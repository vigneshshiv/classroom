/**
 * Next Auth credentails provider Handler
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from 'providers/prisma';

const secret = process.env.JWT_SECRET;

export default async function handler(
  req: NextApiRequest, 
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      // Generate Access Token and Update in Session object
      const token = await getToken({ req, secret });
      return getUser(req, res);
    }
  }
}

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const user = await prisma.user
    .findUnique({
      where: {
        email
      },
      select: {
        id: true,
        email: true
      }
    })
    .then((data: any) => {
      res.status(200).json(data);
    });
}