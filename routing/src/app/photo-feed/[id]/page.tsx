import Image from 'next/image';
import WonderImages, { WonderImage } from '../wonders';
export default function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo: WonderImage = WonderImages.find((p) => p.id === id)!;
  return (
    <>
      <div className="container mx-auto my-10">
        <div className="w-1/2 mx-auto border-[2px] bg-slate-600">
          <div>
            <h1 className="text--center text-3xl font-bold my-4">
              {photo.name}
            </h1>
          </div>
          <Image
            alt={photo.name}
            src={photo.src}
            className="w-full object-cover aspect-square"
            width={300}
          />
          <div className="bg-white py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
