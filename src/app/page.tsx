import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';

export default function Home() {
    return (
        <div className="font-mono">
            <Header />
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}
