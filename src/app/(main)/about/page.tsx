import roisPoto from '../../../../public/img/roisdev.jpeg';
import { MarqueeDemo } from '@/components/MarqueeDemo';
import {
  RiArrowRightSLine,
  RiBook2Fill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTiktokFill
} from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { ShinyButton } from '@/components/magicui/shiny-button';
import { BorderBeam } from '@/components/magicui/border-beam';

export default function About() {
  return (
    <div>
      <div>
        <p className='text-2xl lg:text-4xl font-bold'>About Me</p>
    <p className='text-lg text-muted-foreground max-w-2xl '>
          A brief overview of my life and professional experience as a programmer
        </p>
      </div>
      <div className='flex flex-col lg:flex-row gap-8 mt-10'>
        {/* Profile Sidebar */}

        <div className="lg:w-1/4 flex flex-col items-center">
          <div className="relative w-53 h-53 lg:h-70 lg:w-70 rounded-lg border bg-background shadow-sm sticky top-24 transition-all duration-300">
            <Image
              src={roisPoto}
              alt="Muhammad Rois"
              fill
              className="object-cover rounded-lg transition duration-300 hover:scale-105 "
              priority
            />
            <div>
              <BorderBeam className='hidden ' size={250} duration={12} delay={9} />
            </div>
          </div>

          <div className="mt-4 text-center sticky top-[400px]">
            <h1 className="text-2xl font-bold">Muhammad Rois</h1>
            <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              FrontEnd Developer
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className='lg:w-3/4 space-y-8'>

          <section className='prose prose-lg dark:prose-invert max-w-none space-y-3'>
            <p>Halo! Terima kasih sudah mengunjungi halaman saya.</p>

            <p>
              Saya <span className='text-primary font-medium'>Muhammad Rois</span>, seorang Software Engineer yang berfokus pada solusi digital inovatif yang memberikan nilai bagi bisnis. Saat ini, saya bekerja di bidang pengembangan perangkat lunak dengan keterampilan dalam berbagai bahasa pemrograman, seperti <span className='text-primary font-medium'>JavaScript</span> dan <span className='text-primary font-medium'>TypeScript</span>, serta menggunakan framework seperti <span className='text-primary font-medium'>React</span> dan <span className='text-primary font-medium'>Next.js</span> untuk menciptakan aplikasi yang efisien dan handal.
            </p>

            <p>
              Di luar pekerjaan, saya senang mengembangkan proyek pribadi untuk mengeksplorasi teknologi baru dan memperluas wawasan. Saya juga menikmati video game dan musik sebagai cara untuk menjaga keseimbangan antara karier dan kehidupan pribadi.
            </p>

            <p>
              Selain Programming saya juga memiliki minat besar terhadap video game dan musik. Saya menemukan bahwa aktivitas ini memberikan keseimbangan penting dalam hidup saya sebagai seorang profesional, memungkinkan saya untuk bersantai dan memulihkan energi setelah hari yang panjang di tempat kerja. Saya percaya bahwa menjaga keseimbangan antara kehidupan kerja dan pribadi adalah kunci untuk menjaga kode saya bebas dari bug dan semangat tetap tinggi! 🎮
            </p>

            <p>Tertarik untuk tahu lebih banyak? Jangan ragu untuk menghubungi saya!</p>
          </section>

          <div className='flex flex-col gap-8'>
            <Link href='/resume' className='w-fit'>
              <ShinyButton className='flex shadow-lg items-center justify-center gap-4 group'>
                <RiBook2Fill />
                My Resume
                <RiArrowRightSLine size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
              </ShinyButton>
            </Link>

            <section>
              <h2 className='text-2xl font-bold mb-6'>Tech Stack</h2>
              <MarqueeDemo />
            </section>

            <section className='-mt-10'>
              <h2 className='text-2xl font-bold mb-4'>Lets Connect</h2>
              <p className='mb-6'>
                Ada pertanyaan atau ingin berkolaborasi? Hubungi saya di{' '}
                <a
                  href="mailto:id.roismohammed@gmail.com"
                  className='text-primary hover:underline font-medium'
                >
                  id.roismohammed@gmail.com
                </a>{' '}
                atau hubungi saya melalui media sosial. Mari kita membangun sesuatu yang luar biasa bersama!
              </p>
              <div className='flex gap-4'>
                <SocialIcon
                  href='https://github.com/roismohammed'
                  icon={<RiGithubFill size={24} />}
                  className='hover:text-black dark:hover:text-white'
                />
                <SocialIcon
                  href='https://www.linkedin.com/in/muhammad-rois-8a4a74283/'
                  icon={<RiLinkedinBoxFill size={24} />}
                  className='hover:text-blue-700 dark:hover:text-blue-500'
                />
                <SocialIcon
                  href="https://www.tiktok.com/@ig_roisdev"
                  icon={<RiTiktokFill size={24} />}
                  className='hover:text-black dark:hover:text-white'
                />
                <SocialIcon
                  href="https://www.instagram.com/roisdev_/"
                  icon={<RiInstagramFill size={24} />}
                  className='hover:text-pink-600 dark:hover:text-pink-500'
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

// Social Icon Component
function SocialIcon({ href, icon, className }: {
  href: string;
  icon: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-700 dark:text-gray-300 transition-colors duration-200 ${className}`}
    >
      {icon}
    </a>
  );
}