import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { Post } from '@/src/types';

interface Props {
  post: Post;
}

export default function PostPage({ post }: Props) {
  return (
    <main>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link href={'../'}>Back</Link>
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async context => {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${context.params!.id}`,
  );
  return {
    props: {
      post: data,
    },
  };
};
