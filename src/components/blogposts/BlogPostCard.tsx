/**
 * Blog Post Card
 */
import { ReactNode } from 'react';

type PostCardProps = {
  children: ReactNode;
  title: ReactNode;
  link: string;
  background: string;
};

const BlogPostCard = ({ children, title, link, background }: PostCardProps): JSX.Element => {
  return (
    <a
      className='w-full shadow-lg relative no-underline rounded-lg px-8 py-8 md:py-20 hover:translate-y-5'
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{
        background,
        transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
      }}
    >
      <div
        className='opacity-85 text-sm md:text-base'
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        {children}
      </div>
      <div
        className='uppercase text-white text-sm md:text-3xl xl:text-4xl tracking-wide pt-8'
        style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)' }}
      >
        {title}
      </div>
    </a>
  );
}

export default BlogPostCard;