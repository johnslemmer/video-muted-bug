import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-8 w-full items-center">
      <Link href="/" className="text-blue-500 hover:underline">
        go back home
      </Link>
      <h1>About Page</h1>
    </main>
  );
}
