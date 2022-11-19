/**
 * Students
 */
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useQuery } from '@tanstack/react-query';
import { Prisma } from '@prisma/client';
// Application
import Container from 'components/core/Container';
import Table from 'components/table/Table';
import { H3 } from 'components/common/Heading';
import { Roles } from 'shared/base.data';
import { ROUTES } from 'shared/constants';
import QueryKeys from 'shared/query.keys';
import { formatDateTime } from 'utils/AppUtils';

// Enrolled course type
type EnrolledCoursesWithAllTypes = Prisma.PromiseReturnType<any>;

const Students = (): JSX.Element => {

  const { data: session } = useSession();
  const [refetch, setRefetch] = useState(false);

  if (session?.user?.role == Roles.STUDENT) {
    console.log(`Student Role doesn't have an access to it, ${session?.user?.email}`);
  }

  const studentsData = [
    {
      name: 'Vignesh',
      email: 'vichuviky@gmail.com',
      registeredOn: '2022-11-13T23:34:51.000Z',
      enrolledCourse: 'Front-end development',
      enrolledDate: '2022-11-14T09:10:00.000Z',
      finishedCourse: 'DevOps and Cloud',
      stars: '***'
    },
    {
      name: 'Shiv',
      email: 'shiv@gmail.com',
      registeredOn: '2022-11-15T10:05:02.000Z',
      enrolledCourse: 'DevOps Architect',
      enrolledDate: '2022-11-15T10:20:00.000Z',
      finishedCourse: 'AWS Printical Architect',
      stars: '****'
    },
    {
      name: 'Mac',
      email: 'mac@gmail.com',
      registeredOn: '2022-11-18T16:50:37.000Z',
      enrolledCourse: 'Infra Architect',
      enrolledDate: '2022-11-18T17:05:00.000Z',
      finishedCourse: 'Apple device Architect',
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
  
  const { data: enrolledStudents, isLoading } = useQuery(
    [QueryKeys.STUDENTS_ENROLLED_COURSES], fetchStudentsEnrolledCourses, {
      enabled: refetch,
      staleTime: Infinity
    }
  );

  console.log(`Students enrolled data ${JSON.stringify(enrolledStudents)}`);

  return (
    <div className='relative'>
      <Container>
        <div className='flex flex-col gap-4 my-12 ml-4 py-8'>
          <div className='flex gap-6 items-center mt-8'>
            <H3>Students Data</H3>
          </div>
          <div className='overflow-x-auto'>
            <Table 
              headers={[
                'Student Name', 
                'Email', 
                'Registered On',
                'Course Enrolled', 
                'Finished Courses', 
                'Stars'
              ]}
              rows={enrolledStudents?.length ? (
                enrolledStudents.map((student: EnrolledCoursesWithAllTypes, idx: number) => [
                  student.user.name,
                  student.user.email,
                  formatDateTime(student.user.registeredOn),
                  // student.course.name,
                  (
                    <div 
                      key={idx}
                      className='flex flex-col'
                    >
                      <span>{student.course.name}</span>
                      <span className='tracking-wider'>{formatDateTime(student.course.enrolledDate)}</span>
                    </div>
                  ),
                  'None',
                  'No Stars'
                ])
              ) : (
                studentsData.map((student, idx) => [
                  student.name,
                  student.email,
                  formatDateTime(student.registeredOn),
                  // student.enrolledCourse,
                  (
                    <div 
                      key={idx}
                      className='flex flex-col'
                    >
                      <span>{student.enrolledCourse}</span>
                      <span className='tracking-normal'>{formatDateTime(student.enrolledDate)}</span>
                    </div>
                  ),
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