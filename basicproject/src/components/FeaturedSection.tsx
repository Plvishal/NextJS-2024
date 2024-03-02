'use client';
import Link from 'next/link';
import courseData from '../data/music_course.json';
import { BackgroundGradient } from './ui/background-gradient';
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
  images: string;
}
function FeaturedSection() {
  const featuredCourses = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <>
      <div className="py-12 bg-gray-900">
        <div>
          <div className="text-center">
            <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
              FEATURED COURSES
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extralight tracking-tight text-white">
              Learn With The Best
            </p>
          </div>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center ">
            {featuredCourses.map((cours: Course) => (
              <div key={cours.id} className="flex justify-center">
                <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                  <div className="p-4 sm:p- flex flex-col items-center text-center flex-grow text-white">
                    <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                      {cours.title}
                    </p>
                    <p className="text-lg sm:text-lg text-black mt-4 mb-2 dark:text-neutral-200">
                      {cours.description}
                    </p>
                    <Link href={`/courses/${cours.slug}`}>Learn More</Link>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-20 text-center">
          <Link
            href={'/courses'}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-600 bg-white hover:bg-gray-100 transition duration-200"
          >
            View all Courses
          </Link>
        </div>
      </div>
    </>
  );
}

export default FeaturedSection;