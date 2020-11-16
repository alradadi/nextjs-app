import axios from 'axios';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import { useActions } from '@/src/redux/hooks/useActions';
import { increment, selectCount } from '@/src/redux/slices/counterSlice';
import styles from '@/src/styles/Home.module.css';
import { Post } from '@/src/types';

interface Props {
  posts: Post[];
}

export default function HomePage({ posts }: Props) {
  const count = useSelector(selectCount);

  const actions = useActions({ increment });

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h2>Here&apos;s a list posts:</h2>

        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={'posts/' + post.id}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </main>

      <div>
        <p>
          Global Counter: {count}{' '}
          <button onClick={() => actions.increment()}>increment</button>
        </p>
        <Link href="/counter">Go to counter page</Link>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export const getServerSideProps = async () => {
  const { data } = await axios.get<Post>(
    'https://jsonplaceholder.typicode.com/posts',
  );

  return {
    props: {
      posts: data,
    },
  };
};
