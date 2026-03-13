import { ThemeToggle } from '@/components/ThemeToggle';
import { createFileRoute } from '@tanstack/react-router';
import { Button } from 'antd';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-2">
      <ThemeToggle />

      <Button type="primary">Primary Button</Button>
    </div>
  );
}
