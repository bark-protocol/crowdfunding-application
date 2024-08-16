import { Navbar } from '@/components/admin-panel/navbar';

interface ContentLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function ContentLayout({ title, children }: ContentLayoutProps) {
  return (
    <div>
      {/* Navbar component */}
      <Navbar title={title} />
      
      {/* Main content area */}
      <main className="container mx-auto px-4 sm:px-8 pt-8 pb-8">
        {children}
      </main>
    </div>
  );
}
