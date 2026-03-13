'use client';

import { contactData } from '@/data/contact';
import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';
import { FormEvent, useState } from 'react';

const ease = cubicBezier(0.16, 1, 0.3, 1);

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease,
        },
    },
};

const ContactPage = () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        const formData = new FormData(event.currentTarget);
        
        // Add your Web3Forms Access Key
        // You can get one for free at https://web3forms.com/
        formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                (event.target as HTMLFormElement).reset();
            } else {
                console.error('Error submitting form', data);
                setStatus('error');
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form', error);
            setStatus('error');
            setErrorMessage('Network error. Please try again later.');
        }
    };

    return (
        <motion.div
            className="flex flex-col gap-12"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15, duration: 0.6, ease },
                },
            }}
        >
            <motion.section className="space-y-6" variants={sectionVariants}>
                <div>
                    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        Let&apos;s talk
                    </span>
                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl">
                        {contactData.hero.title}
                    </h1>
                </div>
                <p className="max-w-3xl text-lg leading-relaxed text-neutral-700">
                    {contactData.hero.description}
                </p>
            </motion.section>

            <motion.section
                className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]"
                variants={sectionVariants}
            >
                <div>
                    {status === 'success' ? (
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, ease }}
                            className="flex h-full min-h-[400px] flex-col items-center justify-center rounded-sm border border-neutral-300 bg-transparent px-6 py-12 text-center"
                        >
                            <motion.div 
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
                                className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eaffea] text-[#00b341]"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                            </motion.div>
                            <h3 className="mb-3 font-mono text-2xl font-bold tracking-tight text-neutral-900">Message sent!</h3>
                            <p className="text-neutral-600 font-mono text-sm max-w-[280px] leading-relaxed">
                                Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                            </p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 inline-flex w-fit items-center justify-center border border-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Send another message
                            </button>
                        </motion.div>
                    ) : (
                        <form
                            className="flex flex-col gap-5 border-neutral-300 pt-6"
                            onSubmit={handleSubmit}
                        >
                            {/* Required for Web3Forms to prevent spam */}
                            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                            
                            <div className="space-y-1">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className="w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md disabled:bg-neutral-50 disabled:text-neutral-400"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Your email"
                                    className="w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md disabled:bg-neutral-50 disabled:text-neutral-400"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                                    Project summary
                                </label>
                                <textarea
                                    name="message"
                                    placeholder="Scope, timeline, success criteria…"
                                    className="min-h-[160px] w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md disabled:bg-neutral-50 disabled:text-neutral-400"
                                    required
                                    disabled={status === 'loading'}
                                />
                            </div>
                            
                            {status === 'error' && (
                                <p className="text-sm font-medium text-red-600">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="inline-flex w-fit items-center justify-center border border-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === 'loading' ? 'Sending...' : 'Send message'}
                            </button>
                        </form>
                    )}
                </div>

                <div className="space-y-6 border-neutral-300 pt-6 text-sm text-neutral-600">
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-neutral-900">
                            Contact details
                        </h3>
                        <p>
                            Prefer async? Reach me via any of these channels and I&apos;ll
                            reply within a day.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {contactData.methods.map((method) => (
                            <div key={method.label} className="space-y-1">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                                    {method.label}
                                </p>
                                <Link
                                    href={method.href}
                                    className="text-xl font-semibold text-neutral-900 hover:underline"
                                    target={
                                        method.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        method.href.startsWith('http')
                                            ? 'noreferrer'
                                            : undefined
                                    }
                                >
                                    {method.value}
                                </Link>
                                <p className="text-sm text-neutral-600">
                                    {method.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </motion.div>
    );
};

export default ContactPage;
