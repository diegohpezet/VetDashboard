import { Head } from '@inertiajs/react';
import { Hero } from './Components/Hero';
import { Services } from './Components/Services';
import { About } from './Components/About';
import { Testimonials } from './Components/Testimonials';
import { Contact } from './Components/Contact';
import { Footer } from './Components/Footer';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="min-h-screen">
                <Hero />
                <About />
                <hr className='mt-15'/>
                <Services />
                <Testimonials />
                <Contact />
                <Footer />
            </div>
        </>
    );
}
