import { useEffect, useState } from 'react';

// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// firebase
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { db } from '../firebase.config';

// components
import Iconify from '../components/iconify';
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from '../sections/@dashboard/post';

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' },
];

export default function BlogPage() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'posts');

        const q = query(postsRef, orderBy('createdAt', 'desc'), limit(10));

        const querySnap = await getDocs(q);

        const postsArr = [];

        querySnap.forEach((post) =>
          postsArr.push({
            id: post.id,
            data: post.data(),
          })
        );

        setPosts(postsArr);
        setLoading(false);
      } catch (error) {
        console.log('nothing here');
      }
    };
    fetchPosts();
  }, []);

  return (
    <>
      <title> Dashboard: Blog </title>

      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            startIcon={<Iconify icon="eva:plus-fill" />}
          >
            New Post
          </Button>
        </Stack>

        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {/* <BlogPostsSearch posts={posts} /> */}
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        {loading ? (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <p>Loading</p>
        ) : (
          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}
