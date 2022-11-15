/**
 * Blog Gallery
 */
import Image from 'next/image';
import cn from 'classnames';
// Application
import Container from 'components/core/Container';
import BlogPostsLayout from 'components/blogposts/BlogPostsLayout';
import BlogPostCard from 'components/blogposts/BlogPostCard';
import { H1, H3 } from 'components/common/Heading';
import { P } from 'components/common/MDXComponent';
import RobotoSlabFont from 'components/fonts/RobotoFont';
import TelexFont from 'components/fonts/TelexFont';

// #45cdb9 #7fcfc5
// #ff416c #ff4b2b

const Blog = ({ isBlogPage = true }: { isBlogPage: boolean }): JSX.Element => {
  return (
    <div className='relative'>
      <Container>
        <div className='flex flex-col my-12 py-8 sm:py-0'>
          {isBlogPage && (
            <div className='py-16'>
              <div className='fixed top-0 left-0 w-screen h-96'>
                <Image 
                  alt='coding-blog'
                  src='/images/coding-bg.jpg'
                  fill={true}
                  className='opacity-30'
                />
              </div>
            </div>
          )}
          <div className='mb-8'>
            <H1 className={cn(RobotoSlabFont.className, 'mb-4 section-header text-gray-700 dark:text-gray-200')}>
              Coding Courses
            </H1>
            <H3 className={cn(TelexFont.className, 'mb-4 text-gray-700 dark:text-gray-200')}>
              Here are some of our coding courses.
            </H3>
            <span className='font-lato mb-4 text-gray-700 dark:text-gray-50'>
              Check out my{' '}
              <a
                href='https://github.com/vigneshshiv'
                target='_blank'
                rel='noopener noreferrer'
                className='font-bold text-indigo-400 dark:text-green-400 hover:underline'
              >
                GitHub page
              </a>{' '}
              for more.
            </span>
          </div>
          <BlogPostsLayout>
            <BlogPostCard
              title='Full Stack Development'
              link='https://github.com/vigneshshiv'
              background='linear-gradient(to right, #bce784 0%, #5dd39e 100%)'
            >
              <P className='blog-post-card-text'>
                An educational Web Application to help students and developers learn from 
                curated list of best resources and videos taught by professionals.
              </P>
            </BlogPostCard>
            <BlogPostCard
              title='Back-end Development'
              link='https://github.com/vigneshshiv'
              background='linear-gradient(to right, #ffbe64 0%, #ffaa64 100%)'
            >
              <P className='blog-post-card-text'>
                Back-end as development is widely popular in tech industry. 
                A course that teaches list of topics includes Server, Cloud, DevOps, etc...
              </P>
            </BlogPostCard>
            <BlogPostCard
              title='Front-end Development'
              link='https://github.com/vigneshshiv'
              background='linear-gradient(to right, #fface4 0%, #ab87ff 100%)'
            >
              <P className='blog-post-card-text'>
                Front-end development is cool as they think. 
                Considering, UI/UX design and aesthetic looks and Rapid with React & Next.js
                Also Tailwind CSS for styling...
              </P>
            </BlogPostCard>
            <BlogPostCard
              title='React and Next.js'
              link='https://github.com/vigneshshiv'
              background='linear-gradient(to right, #76a7f4 0%, #6071d7 100%)'
            >
              <P className='blog-post-card-text'>
                React & Next.js application inspired by the many developers and companies. 
                Recent days it's gaining Momentum and lot of custom built-in functionality 
                to make development easier and simpler.
              </P>
            </BlogPostCard>
          </BlogPostsLayout>
          <H1 className={cn(RobotoSlabFont.className, 'mt-8 section-header text-gray-700 dark:text-gray-200')}>
            Advanced Courses
          </H1>
          <H3 className={cn(TelexFont.className, 'mb-8 text-gray-700 dark:text-gray-200')}>
            Here are some of our Advanced Courses.
          </H3>
          <div className='mb-4'>
            <BlogPostsLayout>
              <BlogPostCard
                title='DevOps'
                link='https://github.com/vigneshshiv'
                background='linear-gradient(to right, #ff416c 0%, #ff4b2b 100%)'
              >
                <P className='blog-post-card-text'>
                  DevOps and Infrastructure as manages platform for hosting an 
                  application and helps build pipelines for development and deployment.
                </P>
              </BlogPostCard>
              <BlogPostCard
                title='Data Science and Machine Learning'
                link='https://github.com/vigneshshiv'
                background='linear-gradient(to right, #4568dc 0%, #b06ab3 100%)'
              >
                <P className='blog-post-card-text'>
                  Understand large sets of data and build intelligences..
                </P>
              </BlogPostCard>
              <BlogPostCard
                title='Cyber Security'
                link='https://github.com/vigneshshiv'
                background='linear-gradient(to right, #2c3e50 0%, #3498db 100%)'
              >
                <P className='blog-post-card-text'>
                  With increasing number of digital services and devices globally, 
                  Protect and monitor the anomalies in Web / Network with meticulous 
                  techniques and safe browsing / connecting.
                </P>
              </BlogPostCard>
              <BlogPostCard
                title='Cloud Infrastructure'
                link='https://github.com/vigneshshiv'
                background='linear-gradient(to right, #d585ff 0%, #00ffee 100%)'
              >
                <P className='blog-post-card-text'>
                  Detailed Study about Cloud Infrastructure and Providers... 
                  Ace with your skills with Cloud and Land your dream job. 
                </P>
              </BlogPostCard>
              <BlogPostCard
                title='Canva & Figma'
                link='https://github.com/vigneshshiv'
                background='linear-gradient(to right, #155799 0%, #159957 100%)'
              >
                <P className='blog-post-card-text'>
                  A fancy design for photo and complex UI wireframes for products. 
                  Specialize in one of those areas and double your salary...
                </P>
              </BlogPostCard>
            </BlogPostsLayout>
          </div> 
        </div>
      </Container>
    </div>
  );
}

export default Blog;