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
      const user = await getUser(req, res);
      // Generate Access Token and Update in Session object
      console.log(`secret - ${secret}`);
      const token = await getToken({ req, secret });
      console.log(`JWT Token - ${JSON.stringify(token)}`);
      // res.setHeader('Authorization', String(token));
    }
  }
}

const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  console.log(`email - ${email}`);
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
      console.log(`query response - ${JSON.stringify(data)}`);
      res.status(200).json(data);
    });
    console.log(`Inside User - ${JSON.stringify(user)}`);
}