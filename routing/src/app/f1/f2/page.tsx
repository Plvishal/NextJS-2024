import Link from 'next/link';
import React from 'react';

function F2() {
  return (
    <>
      <div>F2 Page</div>
      <div>
        <Link href={'/f1'}>Back to F1</Link>
      </div>
    </>
  );
}

export default F2;
