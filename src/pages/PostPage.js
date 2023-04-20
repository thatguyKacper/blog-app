// @mui
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
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

const POSTS = [
  {
    id: 1,
    cover: `/assets/images/covers/cover_1.jpg`,
    title: 'Test post',
    view: 1,
    comment: 0,
    share: 0,
    favorite: 1,
    author: {
      name: 'John Doe',
      avatarUrl: `/assets/images/avatars/avatar_1.jpg`,
    },
  },
];

export default function BlogPage() {
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
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack>

        <Grid container spacing={3}>
          {POSTS.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </Grid>
      </Container>
    </>
  );
}
