/**
 * Title
 */

const Title = ({ title }: { title: string }): JSX.Element => {
  return (
    <h2 className='text-2xl font-roboto mt-24 mb-10 text-gray-800 dark:text-gray-50'>
      { title }
    </h2>
  );
}

export default Title;