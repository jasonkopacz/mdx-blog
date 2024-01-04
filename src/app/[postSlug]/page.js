import React from 'react';

import BlogHero from '@/components/BlogHero';

import styles from './postSlug.module.css';

import { MDXRemote } from 'next-mdx-remote/rsc';

import { loadBlogPost } from '@/helpers/file-helpers';

export default async function BlogPost({ params }) {
  const slug = params.postSlug
  const post = await loadBlogPost(slug)

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
