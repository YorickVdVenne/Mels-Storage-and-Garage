import Section from '@/components/atoms/Section/Component';
import about from '@/content/about.json';
import Image from 'next/image';

export default function About(): JSX.Element {
  return (
    <Section id="about-me">
      <h2 className="relative w-fit text-white text-3xl after:block after:w-16 after:h-1 after:bg-secondary after:content-'' after:absolute -after:bottom-1 after:left-1/10 after:rounded-sm">
        {about.data.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-10 gap-4 mt-8">
        <div className="order-2 md:order-1 col-start-1 col-end-10 md:col-start-1 md:col-end-6">
          <p className="text-white">{about.data.description}</p>
        </div>
        <div className="order-1 md:order-2 col-start-1 col-end-10 md:col-start-7 md:col-end-12">
          <div className="bg-secondary rounded-md">
            <Image
              className="opacity-80 rounded-md contrast-125 drop-shadow-md brightness-110 saturate-150"
              src={about.data.img.src}
              alt={about.data.img.alt}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
