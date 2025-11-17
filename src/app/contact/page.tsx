'use client';

import { contactData } from '@/data/contact';
import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';
import { FormEvent } from 'react';

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
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                <form
                    className="flex flex-col gap-5 border-neutral-300 pt-6"
                    onSubmit={handleSubmit}
                >
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                            Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            className="w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md"
                            required
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
                            className="w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                            Project summary
                        </label>
                        <textarea
                            name="message"
                            placeholder="Scope, timeline, success criteria…"
                            className="min-h-[160px] w-full border border-neutral-300 px-4 py-3 text-base outline-none transition focus:border-primary rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex w-fit items-center justify-center border border-neutral-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] transition hover:border-primary hover:text-primary rounded-md cursor-pointer"
                    >
                        Send message
                    </button>
                </form>

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
