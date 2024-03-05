import Card from '../../../../components/Card';
import Link from 'next/link';

export default function Notification() {
  return (
    <>
      <Card>
        Archive Notification
        <div>
          <Link href={'/complex-dashboard'}>Default</Link>
        </div>
      </Card>
    </>
  );
}
