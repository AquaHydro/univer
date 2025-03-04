/**
 * Copyright 2023-present DreamNum Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { createRoot } from 'react-dom/client';
import pkg from '../../package.json';

import './global.css';

// package info
// eslint-disable-next-line node/prefer-global/process
if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-console
    console.table({
        // eslint-disable-next-line node/prefer-global/process
        NODE_ENV: process.env.NODE_ENV,
        // eslint-disable-next-line node/prefer-global/process
        GIT_COMMIT_HASH: process.env.GIT_COMMIT_HASH,
        // eslint-disable-next-line node/prefer-global/process
        GIT_REF_NAME: process.env.GIT_REF_NAME,
        // eslint-disable-next-line node/prefer-global/process
        BUILD_TIME: process.env.BUILD_TIME,
    });
}

function Examples() {
    const demos = [{
        title: '📊 Sheets',
        href: './sheets/',
    }, {
        title: '📝 Docs',
        href: './docs/',
    }, {
        title: '📽️ Slides',
        href: './slides/',
    }, {
        title: '🗂️ Sheets Multi Instance',
        href: './sheets-multi/',
    }, {
        title: '📄 Sheets Uniscript',
        href: './sheets-uniscript/',
    }, {
        title: '📚 Docs Uniscript',
        href: './docs-uniscript/',
    }, {
        title: '🌌 Uni Mode',
        href: './uni/',
    }, {
        title: '📱 Mobile',
        href: './mobile-s/',
    }];

    return (
        <section
            className="univer-h-full univer-flex univer-gap-6 univer-justify-center univer-flex-col univer-items-center"
        >
            <header className="univer-flex univer-items-center">
                <img className="univer-w-24" src="/favicon.svg" alt="Univer" draggable={false} />
                <h1 className="univer-text-slate-700">
                    <span
                        className={`
                          univer-text-4xl
                          univer-bg-[linear-gradient(121deg,#0048ff_18.89%,#0c81ed_39.58%,#029dce_59.87%,#00bbb0_74.37%,#00c5a8_79.64%)]
                          univer-text-transparent univer-bg-clip-text
                        `}
                    >
                        Univer
                    </span>
                    <sup
                        className={`
                          univer-text-xs univer-py-0.5 univer-px-2 univer-border-solid univer-border-current
                          univer-border univer-rounded-xl univer-relative -univer-top-1 univer-left-2
                        `}
                    >
                        {pkg.version}
                    </sup>
                </h1>
            </header>

            <section className="univer-flex univer-flex-wrap univer-gap-6 univer-justify-center">
                {demos.map((demo) => (
                    <a
                        key={demo.title}
                        className={`
                          univer-bg-blue-500 univer-shadow-sm univer-transition-all univer-duration-300
                          univer-ease-in-out univer-text-white univer-rounded-lg univer-font-medium univer-no-underline
                          univer-py-2.5 univer-px-6

                          hover:univer-bg-emerald-500 hover:univer-scale-105
                        `}
                        href={demo.href}
                    >
                        <span>{demo.title}</span>
                    </a>
                ))}
            </section>
        </section>
    );
}

createRoot(document.getElementById('app')!).render(<Examples />);
