import { Icons } from '@/components/ui/icons';
import Image from 'next/image';
import Link from 'next/link';
import { heroData } from '@/data/hero';

const Hero = () => {
    return (
        <section className="grid grid-cols-2 gap-20 border-b pb-20">
            <div>
                <Image
                    src={heroData.image.src}
                    alt={heroData.image.alt}
                    width={500}
                    height={500}
                    quality={100}
                    className="object-cover w-full"
                />
            </div>
            <div className="flex flex-col justify-center gap-8">
                <h1 className="font-sans text-6xl font-bold leading-snug">
                    {heroData.title}
                </h1>
                <p className="text-lg">{heroData.description}</p>
                <div className="flex gap-4">
                    {heroData.socialLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            title={link.title}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {Icons[link.icon as keyof typeof Icons]({
                                className: 'w-6 h-6',
                            })}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
