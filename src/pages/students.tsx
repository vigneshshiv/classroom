/**
 * Students
 */

import { H3 } from 'components/common/Heading';
import Container from 'components/core/Container';
import Table from 'components/table/Table';

const Students = (): JSX.Element => {

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
              rows={studentsData.map((student) => [
                student.name,
                student.email,
                student.enrolledCourse,
                student.finishedCourse,
                student.stars
              ])}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Students;