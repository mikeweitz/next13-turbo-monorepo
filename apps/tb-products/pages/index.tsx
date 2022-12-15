import ThemableButton from '@tbweb/ui/components/buttons/themable-button';
import PageTitle from '@tbweb/ui/components/page-title';
import Link from 'next/link';
export default function Products() {
  return (
    <div>
      <PageTitle>TB Products</PageTitle>
      <ThemableButton
        theme='loud'
        onClick={() => {
          return console.log('click on loud'), (window.location.pathname = '/');
        }}
      >
        Loud Buton with props
      </ThemableButton>
      <p>
        <a href='/'>Anchor Tag to '/'</a>
      </p>
      <p>
        <Link href='/'>
          <a href='/'>Link wrapped Anchor Tag to '/'</a>
        </Link>
      </p>
    </div>
  );
}
