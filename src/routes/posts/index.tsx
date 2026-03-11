import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';

const MOCK_POSTS = [
  { id: '1', title: 'Getting Started with React 19' },
  { id: '2', title: 'TanStack Router Deep Dive' },
  { id: '3', title: 'Vite + TypeScript Setup' },
  { id: '4', title: 'React Compiler Explained' },
];

export const Route = createFileRoute('/posts/')({
  validateSearch: (search: Record<string, unknown>): { page?: number; filter?: string } => ({
    page: Number(search.page ?? 1),
    filter: String(search.filter ?? ''),
  }),
  component: PostsIndexPage,
});

function PostsIndexPage() {
  const { page = 1, filter = '' } = Route.useSearch();
  const navigate = useNavigate({ from: '/posts/' });

  const filtered = MOCK_POSTS.filter(p => (filter ? p.title.toLowerCase().includes(filter.toLowerCase()) : true));

  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    navigate({ search: prev => ({ ...prev, filter: e.target.value, page: 1 }) });
  }

  function handlePageChange(next: number) {
    navigate({ search: prev => ({ ...prev, page: next }) });
  }

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Filter posts..."
          value={filter}
          onChange={handleFilterChange}
          style={{ marginRight: '0.5rem', padding: '0.25rem 0.5rem' }}
        />
        <span style={{ color: '#888', fontSize: '0.875rem' }}>
          Page {page} — {filtered.length} results
        </span>
      </div>

      <ul>
        {filtered.map(post => (
          <li key={post.id} style={{ marginBottom: '0.5rem' }}>
            <Link to="/posts/$postId" params={{ postId: post.id }}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button disabled={page <= 1} onClick={() => handlePageChange(page - 1)}>
          Prev
        </button>
        <button onClick={() => handlePageChange(page + 1)}>Next</button>
      </div>
    </div>
  );
}
