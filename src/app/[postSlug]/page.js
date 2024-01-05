import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

export async function generateMetadata({ params }) {
  const post = await loadBlogPost(params.postSlug)

  return {
    title: `${post.frontmatter.title}`,
    name: `${post.frontmatter.abstract}`,
    content: `${post.content}`
  }
}

export default async function BlogPost({ params }) {
  const post = await loadBlogPost(params.postSlug)

  return (
    <article className={styles.wrapper}>
      <BlogHero
        title={post.frontmatter.title}
        publishedOn={post.frontmatter.publishedOn}
      />
      <div className={styles.page}>
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
