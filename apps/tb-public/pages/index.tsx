import ThemableButton from '@tbweb/ui/components/buttons/themable-button';
import PageTitle from '@tbweb/ui/components/page-title';
import Link from 'next/link';

export default function Web() {
  return (
    <div>
      <PageTitle>Web</PageTitle>
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
