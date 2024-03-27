"use client"

import React, { use } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import { useEffect , useState } from 'react'
import { Blog } from './components/(Blog)/Blog';
import { TagsBlock } from './components/TagsBlock';
import { CommentsBlock } from './components/CommentsBlock';
import { useStore } from '@/store';


export default function Home() {

  const userData = useStore().user
  const { blogs, tags } = useStore()
  const [isMounted, setIsMounted] = useState(false);

  const isBlogsLoading = useStore().blogs.status === 'loading';
  const isTagsLoading = useStore().tags.status === 'loading';

  useEffect(()=>{
    setIsMounted(true);
  },[])
  
  if (!isMounted) {
    return null;
  }

  console.log(userData)

  return (
    <div className='m-10'>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Latest" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isBlogsLoading ? [...Array(5)] : blogs.items).map((obj, index) =>
            isBlogsLoading ? (
                <Blog
                    key={index}
                    isLoading={true}
                    title='Loading'
                    imageUrl='Loading'
                    user={{
                        _id: 'Loading',
                        fullName: 'Test User',
                        avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                    }}
                    createdAt='Loading'
                    viewsCount={0}
                    commentsCount={0}
                    tags={['Loading']}
                    _id = 'Loading'
                />
            ) : (
                <Blog
                    _id={obj._id}
                    title={obj.title}
                    imageUrl={obj.imageUrl ? obj.imageUrl : ''}
                    user={obj.user}
                    createdAt={obj.createdAt}
                    viewsCount={obj.viewsCount}
                    commentsCount={3}
                    tags={obj.tags}
                    isEditable={userData?.id === obj.user._id}
                />
            ),
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Test User2',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'This is test comment',
              },
              {
                user: {
                  fullName: 'Test User3',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </div>
  );
};