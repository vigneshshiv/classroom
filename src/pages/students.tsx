/**
 * Students
 */
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
// Application
import Container from 'components/core/Container';
import Table from 'components/table/Table';
import { H3 } from 'components/common/Heading';
import { Roles } from 'shared/base.data';
import { ROUTES } from 'shared/constants';
import QueryKeys from 'shared/query.keys';
import { EnrolledCourse, Prisma } from '@prisma/client';

const Students = (): JSX.Element => {

  const { data: session } = useSession();

  if (session?.user?.role == Roles.STUDENT) {
    console.log(`Student Role doesn't have an access to it, ${session?.user?.email}`);
    // return <h1>No Access</h1>;
  }

  const studentsData = [
    {
      name: 'Vignesh',
      email: 'vichuviky@gmail.com',
      enrolledCourse: 'Front-end development',
      finishedCourse: 'DevOps and Cloud',
      stars: '***'
    },
    {
      name: 'Shiv',
      email: 'shiv@gmail.com',
      enrolledCourse: 'DevOps Architect',
      finishedCourse: 'AWS Printical Architect',
      stars: '****'
    }
  ];

  // Fetch User Enrolled Courses data
  const fetchStudentsEnrolledCourses = async () => {
    const response = await fetch(ROUTES.API.STUDENTS_ENROLLED_COURSES, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ email: session?.user?.email })
    });
    return response.json();
  };
  type EnrolledCoursesWithAllTypes = Prisma.PromiseReturnType<typeof enrolledStudents>;
  const { data: enrolledStudents, isLoading } = useQuery([QueryKeys.STUDENTS_ENROLLED_COURSES], fetchStudentsEnrolledCourses);

  console.log(`Students enrolled data ${JSON.stringify(enrolledStudents)}`);

  return (
    <div className='relative'>
      <Container>
        <div className='flex flex-col gap-4 my-12 ml-4 py-8'>
          <div className='flex gap-8 items-center'>
            <H3 className='mt-8 text-2xl text-gray-800 dark:text-gray-50'>Students Data</H3>
          </div>
          <div className='overflow-x-auto'>
            <Table 
              headers={[
                'Student Name', 
                'Email', 
                'Course Enrolled', 
                'Finished Courses', 
                'Stars'
              ]}
              rows={enrolledStudents?.length ? (
                enrolledStudents.map((student: EnrolledCoursesWithAllTypes) => [
                  student.user.name,
                  student.user.email,
                  student.course.name,
                  'None',
                  'No Stars'
                ])
              ) : (
                studentsData.map((student) => [
                  student.name,
                  student.email,
                  student.enrolledCourse,
                  student.finishedCourse,
                  student.stars
                ])
              )}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Students;