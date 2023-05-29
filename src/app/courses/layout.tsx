import cn from 'classnames';

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={cn('container bg-white p-4', 'content-container')}>
      {children}
    </section>
  );
}
