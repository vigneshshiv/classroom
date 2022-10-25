/**
 * Blog Post Layout section for Home page
 */
import { ReactNode } from 'react';

const BlogPostsLayout = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <div className='blog-post-layout'>
      {children}
    </div>
  );
}

export default BlogPostsLayout;