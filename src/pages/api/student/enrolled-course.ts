/**
 * Enrolled course
 */
import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from 'providers/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST': {
      return getStudentEnrolledCourses(req, res);
    }
  }
}

const getStudentEnrolledCourses = async (req: NextApiRequest, res: NextApiResponse) => {
  const enrolledCourses = await prisma
    .enrolledCourse
    .findMany({
      include: {
        course: {
          include: {
            user: true
          }
        },
        user: true,
      }
    });
  res.status(200).json(enrolledCourses);
}