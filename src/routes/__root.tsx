import { createRootRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <>
      <nav className="flex gap-4 p-4 border-b border-gray-200">
        <Link to="/" activeProps={{ className: 'font-bold' }} activeOptions={{ exact: true }}>
          Home
        </Link>
        <Link to="/about" activeProps={{ className: 'font-bold' }}>
          About
        </Link>
        <Link to="/posts" activeProps={{ className: 'font-bold' }}>
          Posts
        </Link>
      </nav>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
