import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';

export default function Home() {
    return (
        <div className="font-mono">
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <Footer />
        </div>
    );
}
