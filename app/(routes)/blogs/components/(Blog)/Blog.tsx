import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';

import styles from './Blog.module.scss';
import { UserInfo } from '../(UserInfo)/UserInfo';
import { BlogSkeleton } from './Skeleton';
import { useStore } from '@/store';


export const Blog = ({
  _id,
  title,
  createdAt,
  imageUrl,
  user,
  viewsCount,
  commentsCount,
  tags,
  children,
  isFullBlog,
  isLoading,
  isEditable,
}: {
  _id: string;
  title: string;
  createdAt: string;
  imageUrl: string;
  user: {
    _id: string;
    fullName: string;
    avatarUrl: string;
  };
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  children?: React.ReactNode;
  isFullBlog?: boolean;
  isLoading?: boolean;
  isEditable?: boolean;
}) => {
  

  const deleteBlog = useStore().deleteBlog

  if (isLoading) {
    return <BlogSkeleton />;
  }

  const onClickRemove = async () => {
    if (window.confirm('Confirm delete Blog?')) {
      await deleteBlog(_id)
    }
  };

  console.log(imageUrl)

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullBlog })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link href={`/Blogs/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={onClickRemove} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullBlog })}
          src={imageUrl}
          alt={title}
        />
      )}
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullBlog })}>
            {isFullBlog ? title : <Link href={`/Blogs/${_id}`}>{title}</Link>}
          </h2>
          <ul className={styles.tags}>
            {tags.map((name) => (
              <li key={name}>
                <Link href={`/tag/${name}`}>#{name}</Link>
              </li>
            ))}
          </ul>
          {children && <div className={styles.content}>{children}</div>}
          <ul className={styles.BlogDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
