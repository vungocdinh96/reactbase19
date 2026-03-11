import { createFileRoute, Link, notFound } from '@tanstack/react-router';

const MOCK_POSTS: Record<string, { id: string; title: string; body: string }> = {
  '1': { id: '1', title: 'Getting Started with React 19', body: 'React 19 introduces the React Compiler, Actions, and more.' },
  '2': { id: '2', title: 'TanStack Router Deep Dive', body: 'File-based routing, type-safe search params, and loaders.' },
  '3': { id: '3', title: 'Vite + TypeScript Setup', body: 'Strict TypeScript config with erasableSyntaxOnly and noUnusedLocals.' },
  '4': { id: '4', title: 'React Compiler Explained', body: 'Automatic memoization means you can skip useMemo and useCallback.' },
};

export const Route = createFileRoute('/posts/$postId')({
  loader: ({ params }) => {
    const post = MOCK_POSTS[params.postId];
    if (!post) throw notFound();
    return post;
  },
  notFoundComponent: PostNotFound,
  component: PostDetailPage,
});

function PostDetailPage() {
  const post = Route.useLoaderData();
  const { postId } = Route.useParams();

  return (
    <div>
      <Link to="/posts">← Back to posts</Link>
      <h3 style={{ marginTop: '1rem' }}>{post.title}</h3>
      <p style={{ color: '#888', fontSize: '0.875rem' }}>Post ID: {postId}</p>
      <p>{post.body}</p>
    </div>
  );
}

function PostNotFound() {
  return (
    <div>
      <p>Post not found.</p>
      <Link to="/posts">← Back to posts</Link>
    </div>
  );
}
