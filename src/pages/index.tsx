import { ArrowDownIcon } from '@heroicons/react/24/solid';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';
import React from 'react';

import Layout from '@/components/layout';

export default function IndexPage() {
    return (
        <Layout>
            <Head>
                <title>nextjs-base</title>
            </Head>
            <h1>nextjs-base</h1>
        </Layout>
    )
}