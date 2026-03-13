import { ThemeToggle } from '@/components/ThemeToggle';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <ThemeToggle />
    </div>
  );
}
