import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the React 19 + TanStack Router base template.</p>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts list</Link>
        </li>
        <li>
          <Link to="/posts/$postId" params={{ postId: '1' }}>
            Post #1 (dynamic param)
          </Link>
        </li>
        <li>
          <Link to="/posts" search={{ page: 2, filter: 'react' }}>
            Posts page 2, filter "react" (search params)
          </Link>
        </li>
      </ul>
    </div>
  );
}
