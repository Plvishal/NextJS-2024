import p1 from './photos/earphones_a_1.webp';
import p2 from './photos/earphones_a_2.webp';
import p3 from './photos/earphones_a_3.webp';
import p4 from './photos/earphones_a_4.webp';
import { StaticImageData } from 'next/image';

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const WonderImages: WonderImage[] = [
  {
    id: '1',
    name: 'Squirrel',
    src: p1,
    photographer: 'Vipin',
    location: 'Jaipur',
  },
  {
    id: '2',
    name: 'Goat',
    src: p2,
    photographer: 'Vipin',
    location: 'Lucknow',
  },
  {
    id: '3',
    name: 'Gilahari',
    src: p3,
    photographer: 'Anuj',
    location: 'Noida',
  },
  {
    id: '4',
    name: 'Horse',
    src: p4,
    photographer: 'Vipin',
    location: 'Jaipur',
  },
];
export default WonderImages;
