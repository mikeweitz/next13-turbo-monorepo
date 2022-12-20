import ThemableButton from '@tbweb/ui/components/buttons/themable-button';
import PageTitle from '@tbweb/ui/components/page-title';
import Link from 'next/link';
export default function Products({ formattedDate }: { formattedDate: string }) {
  return (
    <div>
      <PageTitle>TB Products</PageTitle>
      <p>
        This page is server-side rendered. It was rendered on {formattedDate}.
      </p>
      <ThemableButton
        theme='loud'
        onClick={() => {
          return console.log('click on loud'), (window.location.pathname = '/');
        }}
      >
        Loud Buton with props
      </ThemableButton>
      <p>
        <a href='/'>Anchor Tag to &apos;/&apos;</a>
      </p>
      <p>
        <Link href='/'>Link wrapped Anchor Tag to &apos;/&apos;</Link>
      </p>
    </div>
  );
}

export const getServerSideProps = () => {
  const renderDate = Date.now();
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'long',
    timeStyle: 'long',
  }).format(renderDate);
  console.log(
    `SSR ran on ${formattedDate}. This will be logged in CloudWatch.`
  );
  return { props: { formattedDate } };
};
