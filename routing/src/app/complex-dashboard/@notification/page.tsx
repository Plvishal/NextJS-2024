import Card from '../../../components/Card';
import Link from 'next/link';

export default function Notification() {
  return (
    <>
      <Card>
        Notification
        <Link href={'/complex-dashboard/archive'}>Archive</Link>
        <div></div>
      </Card>
    </>
  );
}
