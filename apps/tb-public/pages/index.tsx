import ThemableButton from '@tbweb/ui/components/buttons/themable-button';
import PageTitle from '@tbweb/ui/components/page-title';
import Link from 'next/link';

export default function Web({ formattedDate }: { formattedDate: string }) {
  return (
    <div>
      <PageTitle>Web</PageTitle>
      <p>This page is static. It was built on {formattedDate}.</p>
      <ThemableButton
        // inverse={true}
        onClick={(e) => {
          return (
            console.log('Button clicked', e),
            (window.location.pathname = '/food')
          );
        }}
        theme='brand'
      >
        Click Me
      </ThemableButton>
      <p>
        <Link href='/food'>Go to Food</Link>
      </p>
    </div>
  );
}

export const getStaticProps = async () => {
  const buildDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
  }).format(buildDate);

  return { props: { formattedDate } };
};
