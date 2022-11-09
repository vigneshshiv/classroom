/**
 * User Details
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'providers/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      return getUserDetails(req, res);
    }
  }
}

const getUserDetails = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  let data: any;
  if (email) {
    const user = await prisma.user
      .findUnique({
        where: {
          email
        },
        select: {
          id: true,
          name: true,
          email: true,
          displayName: true,
          image: true
        }
      });
    data = user;
  }
  res.status(200).json(data);
}