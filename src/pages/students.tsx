/**
 * Students
 */

import { H3 } from 'components/common/Heading';
import Container from 'components/core/Container';

const Students = (): JSX.Element => {
  return (
    <div className='relative'>
      <Container>
        <div className='flex flex-col gap-4 my-12 ml-4 py-8'>
          <div className='flex gap-8 items-center'>
            <H3 className='mt-8 text-2xl text-gray-800 dark:text-gray-50'>Students Data</H3>
          </div>
          <div className='overflow-x-auto'>
            <table className='table-fixed min-w-full divide-y divide-gray-200 dark:divide-gray-400'>
              <thead className='bg-gray-100 dark:bg-gray-700'>
                <tr>
                  <th className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'>Student Name</th>
                  <th className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'>Email</th>
                  <th className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'>Course Enrolled</th>
                  <th className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'>Finished Courses</th>
                  <th className='py-2 px-6 text-left text-sm font-medium tracking-wider text-gray-700 dark:text-gray-200 uppercase'>Stars</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-gray-200 dark:divide-gray-500 dark:text-gray-50'>
                <tr className='hover:bg-blue-50 dark:hover:bg-gray-700'>
                  <td className='py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>Vignesh</td>
                  <td className='py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>vichuviky@gmail.com</td>
                  <td className='py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>Front-end development</td>
                  <td className='py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>DevOps and Cloud</td>
                  <td className='py-2 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>***</td>
                </tr>
                <tr className='hover:bg-blue-50 dark:hover:bg-gray-700'>
                  <td className='py-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>Shiv</td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>shiv@gmail.com</td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>DevOps Architect</td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>AWS Printical Architect</td>
                  <td className='py-4 px-6 text-sm font-medium text-gray-700 dark:text-gray-200'>****</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Students;