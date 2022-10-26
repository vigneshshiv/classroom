/**
 * Course Card
 */
import { Fragment } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
// Application
import Container from 'components/core/Container';
import { H2 } from 'components/common/Heading';

const CourseCard = (): JSX.Element => {
  // Front-end Course
  const course = {
    title: 'Front-end Design',
    description: 'UI/UX Aesthetic Design',
    cover: '/images/coding-course.jpg',
    tags: [
      'React', 'Next.js', 'Tailwind CSS'
    ],
    date: '2022-10-26',
    link: 'http://github.com/vigneshshiv'
  };
  return (
    <Container>
      <H2 className='font-roboto text-2xl text-gray-800 dark:text-gray-50 mt-24 mb-10'>
        Design Courses 
      </H2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        <Fragment key={course.link}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='shadow-lg rounded-b-lg'
          >
            <div className='mb-4 pb-6'>
              <a
                href={course.link}
                className='relative'
              >
                <div className='relative w-full h-60'>
                  <Image 
                    alt='course-cover'
                    src={course.cover}
                    layout='fill'
                    objectFit='cover'
                    className='rounded-t-lg'
                  />
                </div>
                <div className='p-4'>
                  <div className='text-sm font-light mb-1 text-gray-400'>
                    {course.date}
                  </div>
                  <div className='text-lg font-semibold mb-1 text-gray-700 dark:text-gray-50'>
                    {course.title}
                  </div>
                  <div className='text-sm font-medium'>
                    {course.description}
                  </div>
                </div>
                <div className='flex flex-wrap mx-4'>
                  {course.tags.map(tag => {
                    return (
                      <span 
                        key={tag}
                        className='outline outline-2 outline-offset-1 outline-indigo-300 dark:outline-green-300 truncate text-xs font-roboto font-light mb-2 mr-2 p-2 rounded max-h-8'
                      >
                        {tag}
                      </span>
                    )
                  })}
                </div>
              </a>
            </div>
          </motion.div>
        </Fragment>
      </div>
    </Container>
  );
}

export default CourseCard;