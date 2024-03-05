import Link from 'next/link';
import wonders from './wonders';
import Image from 'next/image';
export default function PhotoFeed() {
  return (
    <>
      <main className="container max-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          New Wonder of the world
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
          {wonders.map(({ id, src, name }) => (
            <Link href={`/photo-feed/${id}`} key={id}>
              <Image
                alt={name}
                src={src}
                width={200}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
