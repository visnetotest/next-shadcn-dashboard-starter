import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle } from 'lucide-react';

const tasks = [
  {
    id: 1,
    title: 'Complete Your Profile',
    description:
      'Add your personal information and preferences to get started.',
    link: '/profile'
  },
  {
    id: 2,
    title: 'Explore the Dashboard',
    description:
      'Familiarize yourself with the dashboard features and analytics.',
    link: '/dashboard'
  },
  {
    id: 3,
    title: 'Set Up Your First Project',
    description: 'Create your first project and start organizing your work.',
    link: '/dashboard/projects/new'
  },
  {
    id: 4,
    title: 'Review Documentation',
    description: 'Learn more about the platform features and best practices.',
    link: '/docs'
  }
];

export default async function HomePage() {
  const session = await auth();

  if (!session?.user) {
    return redirect('/');
  }

  // For demo purposes, we'll assume 1 task is completed
  const completedTasks = 1;
  const progress = (completedTasks / tasks.length) * 100;

  return (
    <div className='container mx-auto py-8'>
      <h1 className='mb-6 text-3xl font-bold'>Welcome to Your Dashboard</h1>

      <Card className='p-6'>
        <div className='mb-6'>
          <h2 className='mb-2 text-xl font-semibold'>Getting Started</h2>
          <p className='text-muted-foreground'>
            Complete these tasks to make the most of your experience
          </p>
          <Progress value={progress} className='mt-4' />
          <p className='mt-2 text-sm text-muted-foreground'>
            {completedTasks} of {tasks.length} tasks completed
          </p>
        </div>

        <div className='space-y-4'>
          {tasks.map((task, index) => (
            <div
              key={task.id}
              className='flex items-start gap-4 rounded-lg border p-4'
            >
              {index === 0 ? (
                <CheckCircle2 className='mt-1 h-6 w-6 text-green-500' />
              ) : (
                <Circle className='mt-1 h-6 w-6 text-muted-foreground' />
              )}
              <div className='flex-1'>
                <h3 className='font-medium'>{task.title}</h3>
                <p className='text-sm text-muted-foreground'>
                  {task.description}
                </p>
              </div>
              <Button variant={index === 0 ? 'outline' : 'default'} asChild>
                <a href={task.link}>{index === 0 ? 'View' : 'Start'}</a>
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
